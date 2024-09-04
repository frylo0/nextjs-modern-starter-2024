import { isRegExp } from 'util/types';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

import type { StorybookConfig } from '@storybook/nextjs';

type TRule = {
	issuer: RegExp;
	test: RegExp;
	resourceQuery?: {
		not: Array<any>;
	};
	exclude: RegExp;
};

const config: StorybookConfig = {
    staticDirs: ['../public'],
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@chromatic-com/storybook'
    ],

    framework: {
		name: '@storybook/nextjs',
		options: {},
	},

    docs: {},

    webpackFinal: async (config) => {
		//console.log(config.module?.rules);

		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module?.rules?.find(
			(rule) => typeof rule === 'object' && rule?.test && isRegExp(rule.test) && rule.test.test('.svg')
		) as TRule | undefined;

		if (fileLoaderRule) {
			const resourceQueryNot = fileLoaderRule.resourceQuery?.not || [];

			config.module?.rules?.push(
				// Reapply the existing rule, but only for svg imports ending in ?url
				{
					...fileLoaderRule,
					test: /\.svg$/i,
					resourceQuery: /url/, // *.svg?url
				},
				// Convert all other *.svg imports to React components
				{
					test: /\.svg$/i,
					issuer: fileLoaderRule?.issuer,
					resourceQuery: { not: [...resourceQueryNot, /url/] }, // exclude if *.svg?url
					use: ['@svgr/webpack'],
				}
			);

			// Modify the file loader rule to ignore *.svg, since we have it handled now.
			fileLoaderRule.exclude = /\.svg$/i;
		}

		config.plugins?.push(new VanillaExtractPlugin());

		return config;
	},

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};

export default config;
