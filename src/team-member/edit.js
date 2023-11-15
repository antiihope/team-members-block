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
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
// https://source.unsplash.com/550x550/?portrait
function Edit( { attributes, setAttributes, noticeOperations, noticeUI } ) {
	const { name, bio, url, alt, id } = attributes;
	const [ blobURL, setBlobURL ] = useState( '' );

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
				/>
				<RichText
					placeholder="Bio"
					tagName="p"
					onChange={ onChangeBio }
					value={ bio }
					allowedFormats={ [] }
				/>
			</div>
		</>
	);
}

export default withNotices( Edit );
