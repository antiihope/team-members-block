import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { Spinner, withNotices } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
// https://source.unsplash.com/550x550/?portrait
function Edit( { attributes, setAttributes, noticeOperations, noticeUI } ) {
	const { name, bio, url, alt } = attributes;
	const [ blobURL, setBlobURL ] = useState( '' );
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
	const onUploadError = ( message ) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( message );
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
	);
}

export default withNotices( Edit );
