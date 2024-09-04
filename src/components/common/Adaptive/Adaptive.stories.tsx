import { Adaptive } from './Adaptive';

import type { Meta, StoryObj } from '@storybook/react';

/**
 * Put content inside of this element and it's width will match design page grid.
 */

const meta = {
	title: 'Common/Adaptive',
	component: Adaptive,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Adaptive>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Content',
		style: {
			background: 'black',
			color: 'white',
			borderRadius: '1em',
			padding: '0.25em',
			textAlign: 'center',
		},
	},
};
