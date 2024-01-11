import React from 'react';
import type { Preview } from '@storybook/react';
import { s } from './preview.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
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
};

export default preview;
