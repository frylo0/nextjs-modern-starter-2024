import { style } from '@vanilla-extract/css';

import { colorMode } from '@/styles/bundle.css';

export const sCenter = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	padding: '4rem 0',
});

export const sCounter = style({
	marginBlockStart: '2em',
	display: 'flex',
	flexDirection: 'row',
	gap: '1em',
});

export const sPersons = style({
	whiteSpace: 'pre',
	fontFamily: 'monospace',
});

export const sCode = style({
	fontWeight: '700',
	fontFamily: 'var(--font-mono)',
});

export const sGrid = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(4,minmax(25%,auto))',
	width: 'var(--max-width)',
	maxWidth: '100%',
});

export const sLogo = style({
	position: 'relative',
	userSelect: 'none',

	'@media': {
		[colorMode.dark]: {
			filter: 'invert(1) drop-shadow(0 0 0.3rem #ffffff70)',
		},
	},
});

export const sVercelLogo = style({
	'@media': {
		[colorMode.dark]: {
			filter: 'invert(1)',
		},
	},
});

export const sCard = style({
	padding: '1rem 1.2rem',
	borderRadius: 'var(--border-radius)',
	background: 'rgba(var(--card-rgb),0)',
	border: '1px solid #777',
	transition: 'background 200ms , border 200ms',
	width: '300px',
});

export const sCardH2 = style({
	fontWeight: '600',
	marginBottom: '0.7rem',
});

export const sCardP = style({
	margin: '0',
	opacity: '0.6',
	fontSize: '0.9rem',
	lineHeight: '1.5',
	maxWidth: '30ch',
});

export const sDescription = style({
	display: 'inherit',
	justifyContent: 'inherit',
	alignItems: 'inherit',
	fontSize: '0.85rem',
	maxWidth: 'var(--max-width)',
	width: '100%',
	zIndex: '2',
	fontFamily: 'var(--font-mono)',
});

export const sDescriptionA = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '0.5rem',
});

export const sDescriptionP = style({
	position: 'relative',
	margin: '0',
	padding: '1rem',
	backgroundColor: 'rgba(var(--callout-rgb),0.5)',
	border: '1px solid rgba(var(--callout-border-rgb),0.3)',
	borderRadius: 'var(--border-radius)',
});

export const sMain = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '6rem',
	minHeight: '100vh',
	color: 'white',
});

export const sMainA = style({
	color: 'white',
});
