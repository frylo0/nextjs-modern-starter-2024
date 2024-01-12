import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { deploy } from '@frylo/pftp';

import { creds } from '../../.creds.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const originNameValue = process.argv.find((arg) => arg.startsWith('--origin='));

if (!originNameValue)
	throw new Error(`No origin name provided to deploy.mjs. Try use it like this "node deploy.mjs --origin=stage"`);

const originName = originNameValue.replace('--origin=', '').trim();
const originCreds = creds[originName];

if (!originCreds)
	throw new Error(
		`No creds exists for origin "${originName}". Check your \`.creds.mjs\` file at the root of the project`
	);

async function main() {
	await deploy({
		...originCreds,

		localFolder: path.join(__dirname, '..', '..', 'out'),
		progress: 'bar',
	});
}

main().then(process.exit).catch(console.error);
