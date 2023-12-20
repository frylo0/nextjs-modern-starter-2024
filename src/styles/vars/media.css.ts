const device = {
	desktop: '(min-width: 1280px)',
	tablet: '(min-width: 768px) and (max-width: 1280px)',
	phone: '(max-width: 768px)',
};

const colorMode = {
	dark: '(prefers-color-scheme: dark)',
	light: '(prefers-color-scheme: light)',
};

function combine(...mediaStrings: string[]): string {
	return mediaStrings.join(' and ');
}

export const media = {
	device,
	colorMode,
	combine,
};
