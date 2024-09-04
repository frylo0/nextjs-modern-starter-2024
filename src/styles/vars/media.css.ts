export type TBreakpoint = {
	minWidth: number | null;
	maxWidth: number | null;
};

export type TDevice = 'desktop' | 'laptop' | 'tablet' | 'smartphone' | 'phone' | 'zero';

export const breakpoints: Record<TDevice, TBreakpoint> = {
	desktop: {
		maxWidth: null,
		minWidth: 1920,
	},
	laptop: {
		maxWidth: 1919,
		minWidth: 960,
	},
	tablet: {
		maxWidth: 959,
		minWidth: 768,
	},
	smartphone: {
		maxWidth: 767,
		minWidth: 480,
	},
	phone: {
		maxWidth: 479,
		minWidth: 360,
	},
	zero: {
		maxWidth: 359,
		minWidth: null,
	},
};

export const colorMode = {
	dark: '(prefers-color-scheme: dark)',
	light: '(prefers-color-scheme: light)',
};
