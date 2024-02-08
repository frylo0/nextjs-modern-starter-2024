import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
/**
 * ## Button
 *
 * This is example button component made to show whole power of storybook.
 *
 * ```js
 * console.log('You could also paste some code using markdown + jsDoc features');
 * ```
 */
const meta = {
	title: 'Common/Button',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		color: { control: 'select', options: ['primary', 'secondary'] },
		size: { control: 'select', options: ['small', 'large'] },
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		color: 'primary',
		children: 'Button',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Button',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		children: 'Button',
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		children: 'Button',
	},
};
