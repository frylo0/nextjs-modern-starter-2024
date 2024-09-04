import { execSync } from 'child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { deploy } from '@frylo/pftp';
import { NodeSSH } from 'node-ssh';

import { creds, telegramBot } from '../../.creds.mjs';
import { handleExit } from './handle-exit.mjs';
import { TelegramChat } from './telegram.mjs';

const ssh = new NodeSSH();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const originNameValue = process.argv.find((arg) => arg.startsWith('--origin='));
const telegramModeValue = process.argv.find((arg) => arg.startsWith('--telegram='));

if (!originNameValue)
	throw new Error(`No origin name provided to deploy.mjs. Try use it like this "node deploy.mjs --origin=stage"`);

const originName = originNameValue.replace('--origin=', '').trim();
const isTelegramDisabled = telegramModeValue && telegramModeValue.replace('--telegram=', '') === 'off';

const originCreds = creds[originName];
const telegram = new TelegramChat(telegramBot.token, telegramBot.chatId, isTelegramDisabled);

if (!originCreds)
	throw new Error(
		`No creds exists for origin "${originName}". Check your \`.creds.mjs\` file at the root of the project`
	);
if (!isTelegramDisabled && (!telegramBot.token || !telegramBot.chatId))
	throw new Error(
		`Invalid telegram bot config. Use \`--telegram=off\` option or check our \`.creds.mjs\` file at the root of the project`
	);
if (isTelegramDisabled) console.log('(!) Telegram notifications are DISABLED');

const website = `[${originCreds.label}](${originCreds.domain})`;
const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const deployer = execSync('git config user.name').toString().trim();

const metaInfo = '\n' + `👀 _${deployer}_` + '\n' + `🌱 _${branch}_`;

async function main() {
	await telegram.message(`🔧 *Deploy has started*, ${website}!` + '\n' + metaInfo);

	await deploy({
		...originCreds,

		localFolder: path.join(__dirname, '..', '..'),
		progress: 'bar',

		excludeRegExp: [
			/\.git\//,
			/node_modules\//,
			/\.next\//,
			/\.husky\//,
			/\.storybook\//,
			/\.vscode\//,
			/\.creds\.mjs$/,
		],
	});

	console.log(
		'┌───────────────────────────────────────┐\n' +
			'│    (!) RESTARTING DOCKER CONTAINER    │\n' +
			'└───────────────────────────────────────┘'
	);

	await ssh.connect({
		host: originCreds.host,
		port: originCreds.port,
		username: originCreds.username,
		password: originCreds.password,
	});

	await ssh.execCommand(
		`export NVM_DIR="$HOME/.nvm" &&
    	[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

		cd ${originCreds.remoteFolder} \\
			&& pnpm docker:prod down \\
			&& pnpm docker:prod build \\
			&& pnpm serve`,
		{
			onStdout: (buffer) => process.stdout.write(buffer.toString()),
			onStderr: (buffer) => process.stderr.write(buffer.toString()),
		}
	);

	ssh.dispose();

	console.log(
		'┌───────────────────────────────────────┐\n' +
			'│          ✓  DOCKER RESTARTED          │\n' +
			'└───────────────────────────────────────┘'
	);

	await telegram.message(`✅ *Deploy finished successfully*, ${website}!` + '\n' + metaInfo);
}

main()
	.then(process.exit)
	.catch((err) => {
		console.error(err);
		telegram.message(`⛑️ *Deploy error*, ${website}...` + '\n' + `🔎 ${err}` + '\n' + metaInfo);
	});

handleExit(telegram, website, metaInfo);

/** @typedef {import('@frylo/pftp').Credentials} Credentials */
/** @typedef {import('@frylo/pftp').Configuration} Configuration */

/** @typedef {{ domain: string, label: string }} MetaInfo */
/** @typedef {Record<string, Credentials & Pick<Configuration, 'remoteFolder'> & MetaInfo>} HostingCreds */
