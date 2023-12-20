import { style } from '@vanilla-extract/css';

import { media } from '@/styles/bundle.css';

const main = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '1em',
});

const button = style({
	'@media': {
		[media.device.desktop]: {
			width: '300px',
		},
		[media.device.tablet]: {
			width: '200px',
		},
		[media.device.phone]: {
			width: '100px',
		},
	},
});

export const s = {
	main,
	button,
};
