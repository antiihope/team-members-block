import { registerBlockType, createBlock } from '@wordpress/blocks';
import './team-member';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'block-course/team-members', {
	edit: Edit,
	save,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/gallery' ],
				transform: ( { images, columns } ) => {
					const innerBlocks = images.map( ( { url, id, alt } ) => {
						return createBlock( 'block-course/team-member', {
							url,
							id,
							alt,
						} );
					} );
					return createBlock(
						'block-course/team-members',
						{
							columns: columns || 2,
						},
						innerBlocks
					);
				},
			},
			{
				type: 'block',
				blocks: [ 'core/image' ],
				isMultiBlock: true,
				transform: ( attrs ) => {
					const innerBlocks = attrs.map( ( { url, id, alt } ) => {
						return createBlock( 'block-course/team-member', {
							url,
							id,
							alt,
						} );
					} );
					return createBlock(
						'block-course/team-members',
						{
							columns: attrs.length > 3 ? 3 : attrs.length,
						},
						innerBlocks
					);
				},
			},
		],
	},
} );
