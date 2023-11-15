import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import {
	Spinner,
	withNotices,
	ToolbarButton,
	PanelBody,
	TextareaControl,
	SelectControl,
	Icon,
	Tooltip,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useState, useRef } from '@wordpress/element';
// https://source.unsplash.com/550x550/?portrait
function Edit( {
	attributes,
	setAttributes,
	noticeOperations,
	noticeUI,
	isSelected,
} ) {
	const { name, bio, url, alt, id, socialLinks } = attributes;
	const [ blobURL, setBlobURL ] = useState( '' );
	const [ selectedLink, setSelectedLink ] = useState( '' );
	const titleRef = useRef();

	const imageObject = useSelect(
		( select ) => {
			return id ? select( 'core' ).getMedia( id ) : null;
		},
		[ id ]
	);
	const imageSizes = useSelect( ( select ) => {
		return select( blockEditorStore ).getSettings().imageSizes;
	}, [] );

	const getImageSizeOptions = () => {
		if ( ! imageSizes ) return [];
		const options = [];
		const sizes = imageObject?.media_details?.sizes;
		for ( const key in sizes ) {
			const size = sizes[ key ];
			const imageSize = imageSizes.find( ( item ) => item.slug === key );
			if ( ! imageSize ) {
				continue;
			}
			options.push( {
				label: imageSize.name,
				value: size.source_url,
				// width: size.width,
				// height: size.height,
			} );
		}
		return options;
	};

	const onChangeName = ( name ) => {
		setAttributes( { name } );
	};
	const onChangeBio = ( bio ) => {
		setAttributes( { bio } );
	};
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { url: undefined, id: undefined, alt: undefined } );
			return;
		}
		setAttributes( {
			id: media.id,
			url: media.url,
			alt: media.alt,
		} );
	};
	const onSelectUrl = ( url ) => {
		setAttributes( {
			id: undefined,
			url,
			alt: undefined,
		} );
	};
	const onChangeImageSize = ( url ) => {
		setAttributes( { url } );
	};

	const onUploadError = ( message ) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( message );
	};

	const removeImage = () => {
		setAttributes( { url: undefined, id: undefined, alt: undefined } );
	};

	const addNewSocialLink = () => {
		const newSocialLinks = [ ...socialLinks ];
		newSocialLinks.push( {
			icon: 'wordpress',
			link: '#',
		} );

		setAttributes( { socialLinks: newSocialLinks } );
		setSelectedLink( socialLinks.length );
	};

	const onChangeAlt = ( alt ) => {
		setAttributes( { alt } );
	};

	useEffect( () => {
		if ( ! id && isBlobURL( url ) ) {
			setAttributes( { url: undefined, alt: undefined } );
		}
	}, [] );

	useEffect( () => {
		if ( isBlobURL( url ) ) {
			setBlobURL( url );
		} else {
			revokeBlobURL( blobURL );
			setBlobURL( '' );
		}
	}, [ url ] );

	useEffect( () => {
		titleRef.current.focus();
	}, [ url ] );
	useEffect( () => {
		if ( ! isSelected ) {
			setSelectedLink( '' );
		}
	}, [ isSelected ] );
	return (
		<>
			<InspectorControls>
				<PanelBody title="Image Settings">
					{ id && (
						<SelectControl
							label="Image Size"
							options={ getImageSizeOptions() }
							value={ url }
							onChange={ onChangeImageSize }
						/>
					) }
					{ url && ! isBlobURL( url ) && (
						<TextareaControl
							label="Alt Text (Alternative Text)"
							value={ alt }
							onChange={ onChangeAlt }
						/>
					) }
				</PanelBody>
			</InspectorControls>
			{ url && (
				<BlockControls group="inline">
					<ToolbarButton onClick={ removeImage }>
						Remove Image
					</ToolbarButton>
				</BlockControls>
			) }

			<div { ...useBlockProps() }>
				{ url && (
					<div
						className={ `wp-block-block-course-team-member-img${
							isBlobURL( url ) ? ' is-loading' : ''
						}` }
					>
						<img src={ url } alt={ alt } />{ ' ' }
						{ isBlobURL( url ) && <Spinner /> }
					</div>
				) }
				<MediaPlaceholder
					icon="admin-users"
					onSelect={ onSelectImage }
					onSelectURL={ onSelectUrl }
					onError={ onUploadError }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					disableMediaButtons={ url }
					notices={ noticeUI }
				/>
				<RichText
					placeholder="Name"
					tagName="h3"
					onChange={ onChangeName }
					value={ name }
					allowedFormats={ [] }
					ref={ titleRef }
				/>
				<RichText
					placeholder="Bio"
					tagName="p"
					onChange={ onChangeBio }
					value={ bio }
					allowedFormats={ [] }
				/>
				<div className="wp-block-block-course-team-member-social-links">
					<ul>
						{ socialLinks.map( ( item, index ) => {
							return (
								<li
									key={ index }
									className={
										selectedLink === index
											? 'is-selected'
											: null
									}
								>
									<button
										onClick={ () =>
											setSelectedLink( index )
										}
									>
										<Icon icon={ item.icon } />
									</button>
								</li>
							);
						} ) }
						{ isSelected && (
							<li className="wp-block-block-course-team-member-add-icon-li">
								<Tooltip text="Add Social Link">
									<button
										onClick={ addNewSocialLink }
										aria-label="Add Social link button"
									>
										<Icon icon="plus" />
									</button>
								</Tooltip>
							</li>
						) }
					</ul>
				</div>
			</div>
		</>
	);
}

export default withNotices( Edit );
