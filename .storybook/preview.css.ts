import { style } from '@vanilla-extract/css';

import { fonts } from '../src/styles/bundle.css';

const storybookDecorator = style({
	fontFamily: fonts.gothamPro,
});

export const s = {
	storybookDecorator,
};
