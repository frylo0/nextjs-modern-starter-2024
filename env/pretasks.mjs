import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import c from 'chalk';

import credentials from '../envs.mjs';
import { getArgument, hasSomeArgument } from './core/argv-core.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(`\n${c.bold('Pretasks')} by ${c.blueBright(c.bold('fritylo'))}\n`);

export const PRETASKS = {
	createEnvTSFile: {
		validator: (args) =>
			checkObject(
				{
					authorization: (value) => typeof value === 'boolean',
					adminPanel: (value) => typeof value === 'string',
				},
				args
			),

		processor: ({ authorization, adminPanel }) => {
			const content =
				`export const IS_AUTH = ${authorization};` + '\n' + `export const ADMIN_PANEL = '${adminPanel}';` + '\n';

			fs.writeFileSync(path.join(__dirname, '..', 'src', 'constants', 'env.ts'), content);
		},
	},
};

function main() {
	if (!hasSomeArgument(/^--creds=/)) {
		console.error(
			c.red(
				c.bold('Can not run pretasks without --creds parameter. ') +
					c.italic('\nExample: yarn pretasks --creds=testing')
			) + '\n'
		);
		throw new Error('No creds provided');
	}

	const targetCredentialsName = getArgument('--creds=').replace('--creds=', '');

	const targetCredentials = credentials[targetCredentialsName];
	const pretasks = targetCredentials.pretasks;

	console.log(c.bold(`Preparing for ${c.underline(targetCredentialsName)}\n`));

	if (!pretasks) {
		console.warn(c.yellow(`${c.bold('WARN:')} No pretasks provided for "${targetCredentialsName}" creds.`));
		return;
	}

	for (const pretask in pretasks) {
		const args = pretasks[pretask];

		const pretaskExists = pretask in PRETASKS;

		if (!pretaskExists) {
			console.log(
				c.yellow.bold('\nWARN:') + c.yellow(` Unexpected pretask "${pretask}" in "${targetCredentialsName}" creds.`)
			);
			continue;
		}

		const { validator, processor } = PRETASKS[pretask];

		console.log(c.bold.blue('PRETASK:') + ' ' + pretask, args);

		if (!validator(args)) {
			console.error(c.red(`${c.bold('FAILED')}: Invalid args for "${pretask}".\n`));
			throw new Error(`Invalid args for "${pretask}" pretask`);
		}

		processor(args);
	}

	console.log(c.blue(c.bold('\nPretasks') + ' completed!!!\n'));
}

function checkObject(schema, object) {
	for (let prop in schema) {
		if (!(prop in object)) return false;

		const validator = schema[prop];
		const isValidValue = validator(object[prop]);

		if (!isValidValue) return false;
	}

	return true;
}

main();
