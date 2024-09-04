import { style } from '@vanilla-extract/css';

import { breakpoints } from '@/styles/bundle.css';

const desktopWidth = breakpoints.desktop.minWidth! - 315 * 2;

export const sAdaptive = style({
	margin: 'auto',

	'@media': {
		[`(min-width: ${desktopWidth + 20 * 2}px)`]: {
			width: desktopWidth,
		},
		[`(max-width: ${desktopWidth + 20 * 2 - 1}px)`]: {
			width: `calc(100% - 20px * 2)`,
		},
	},
});
