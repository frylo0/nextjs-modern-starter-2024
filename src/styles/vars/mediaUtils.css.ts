import { breakpoints, TBreakpoint, TDevice } from './media.css';

type TOperand = '<=' | '>=' | '=' | '<' | '>';

/**
 * Gives a width media query to corresponding device breakpoint.
 *
 * Example of usage:
 *
 * ```ts
 * width('<', 'phone'); // Less than Phone => (max-width: 359px)
 * width('>', 'phone'); // Greater than phone => (min-width: 481px)
 * width('<=', 'phone'); // Less equals =>  (max-width: 360px)
 * width('>=', 'phone'); // Greater equals => (min-width: 480px)
 * width('=', 'phone'); // Device size => (min-width: 360px) and (max-width: 480px)
 * ```
 */
function width(operand: TOperand, deviceName: TDevice): string {
	const device = breakpoints[deviceName];

	switch (operand) {
		case '<=':
			return getMediaQuery({ minWidth: null, maxWidth: device.maxWidth });
		case '>=':
			return getMediaQuery({ minWidth: device.minWidth, maxWidth: null });
		case '<':
			return getMediaQuery({ minWidth: null, maxWidth: device.maxWidth ? device.maxWidth - 1 : null });
		case '>':
			return getMediaQuery({ minWidth: device.maxWidth ? device.maxWidth + 1 : null, maxWidth: null });
		case '=':
			return getMediaQuery(device);
	}
}

width.between = widthBetween;

// Helpers

function getMediaQuery(breakpoint: TBreakpoint) {
	const isMin = breakpoint.minWidth !== null;
	const isMax = breakpoint.maxWidth !== null;

	const body = [
		isMin && `(min-width: ${breakpoint.minWidth}px)`,
		isMin && isMax && 'and',
		isMax && `(max-width: ${breakpoint.maxWidth}px)`,
	];

	return body.filter((val) => val).join(' ');
}

function widthBetween(minDeviceName: TDevice, maxDeviceName: TDevice): string {
	return getMediaQuery({
		minWidth: breakpoints[minDeviceName].minWidth,
		maxWidth: breakpoints[maxDeviceName].maxWidth,
	});
}

// Exports

export const calc = {
	width,
};
