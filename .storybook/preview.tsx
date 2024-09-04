import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';

import { s } from './preview.css';

import type { Preview } from '@storybook/react';

import '../src/styles/global-in-css.css';
import '../src/styles/global-in-js.css';

const preview: Preview = {
    parameters: {
		actions: {},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		viewport: {
			viewports: {
				...INITIAL_VIEWPORTS,
				...MINIMAL_VIEWPORTS,
			},
		},
	},

    decorators: [
		(Story) => (
			<div className={s.storybookDecorator}>
				<Story />
			</div>
		),
	],

    tags: ['autodocs']
};

export default preview;
