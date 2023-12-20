import { style } from '@vanilla-extract/css';

import { media } from '@/styles/bundle.css';

const center = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	padding: '4rem 0',
	'::after': {
		background: 'var(--primary-glow)',
		width: '240px',
		height: '180px',
		zIndex: '-1',
		content: '',
		left: '50%',
		position: 'absolute',
		filter: 'blur(45px)',
		transform: 'translateZ(0)',
	},
	'::before': {
		background: 'var(--secondary-glow)',
		borderRadius: '50%',
		width: '480px',
		height: '360px',
		marginLeft: '-400px',
		content: '',
		left: '50%',
		position: 'absolute',
		filter: 'blur(45px)',
		transform: 'translateZ(0)',
	},
});

const code = style({
	fontWeight: '700',
	fontFamily: 'var(--font-mono)',
});

const grid = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(4,minmax(25%,auto))',
	width: 'var(--max-width)',
	maxWidth: '100%',
});

const logo = style({
	position: 'relative',

	'@media': {
		[media.colorMode.dark]: {
			filter: 'invert(1) drop-shadow(0 0 0.3rem #ffffff70)',
		},
	},
});

const vercelLogo = style({
	'@media': {
		[media.colorMode.dark]: {
			filter: 'invert(1)',
		},
	},
});

const card = style({
	padding: '1rem 1.2rem',
	borderRadius: 'var(--border-radius)',
	background: 'rgba(var(--card-rgb),0)',
	border: '1px solid #777',
	transition: 'background 200ms , border 200ms',
	width: '300px',
});

const cardH2 = style({
	fontWeight: '600',
	marginBottom: '0.7rem',
});

const cardP = style({
	margin: '0',
	opacity: '0.6',
	fontSize: '0.9rem',
	lineHeight: '1.5',
	maxWidth: '30ch',
});

const description = style({
	display: 'inherit',
	justifyContent: 'inherit',
	alignItems: 'inherit',
	fontSize: '0.85rem',
	maxWidth: 'var(--max-width)',
	width: '100%',
	zIndex: '2',
	fontFamily: 'var(--font-mono)',
});

const descriptionA = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '0.5rem',
});

const descriptionP = style({
	position: 'relative',
	margin: '0',
	padding: '1rem',
	backgroundColor: 'rgba(var(--callout-rgb),0.5)',
	border: '1px solid rgba(var(--callout-border-rgb),0.3)',
	borderRadius: 'var(--border-radius)',
});

const main = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '6rem',
	minHeight: '100vh',
	color: 'white',
});

const mainA = style({
	color: 'white',
});

export const s = {
	main,
	description,
	descriptionA,
	descriptionP,
	card,
	cardH2,
	cardP,
	mainA,
	logo,
	grid,
	code,
	center,
	vercelLogo,
};
