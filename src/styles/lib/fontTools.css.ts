/**
 * Font siZe - defines size of font and line height in one line.
 * @param size Value for fontSize prop
 * @param lineHeightPx value for lineHeight prop in px units

 * @example
 * ```ts
 * import { style } from '@vanilla-extract/css';
 * import { fz } from '@/styles/bundle.css';
 *
 * export const sTitle = style({
 * 	fontFamily: fonts.agrandirGrand,
 * 	...fz(30, 36),
 *
 * 	'@media': {
 * 		[calc.width('<=', 'smartphone')]: {
 * 			...fz(20, 24),
 * 		},
 * 	},
 * });
 * ```
 */
export function fz(size: number, lineHeightPx: number) {
	return {
		fontSize: size,
		lineHeight: `${lineHeightPx}px`,
	};
}

/**
 * Defines basic font params in one line
 * @param family Family of the font
 * @param weight Weight of the font
 * @param size Value for fontSize prop
 * @param lineHeightPx value for lineHeight prop in px units

 * @example
 * ```ts
 * import { style } from '@vanilla-extract/css';
 * import { font } from '@/styles/bundle.css';
 *
 * export const sTitle = style({
 * 	...font(fonts.gothamPro, 800, 30, 36),
 *
 * 	'@media': {
 * 		[calc.width('<=', 'smartphone')]: {
 * 			...font(fonts.gothamPro, 600, 20, 24),
 * 		},
 * 	},
 * });
 * ```
 */
export function font(family: string, weight: number, size: number, lineHeightPx: number) {
	return {
		fontFamily: family,
		fontWeight: weight,
		fontSize: size,
		lineHeight: `${lineHeightPx}px`,
	};
}
