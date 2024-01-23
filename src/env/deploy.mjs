import { execSync } from 'child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { deploy } from '@frylo/pftp';

import { creds, telegramBot } from '../../.creds.mjs';
import { handleExit } from './handle-exit.mjs';
import { TelegramChat } from './telegram.mjs';

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
	await telegram.message(`🔧 *Начался деплой*, ${website}!` + '\n' + metaInfo);

	await deploy({
		...originCreds,

		localFolder: path.join(__dirname, '..', '..', 'out'),
		progress: 'bar',

		includeForceRegExp: [/index\.html$/, /iframe\.html$/, /index\.json$/, /project\.json$/, /stories\.json$/],
	});

	await telegram.message(`✅ *Деплой успешно завершен*, ${website}!` + '\n' + metaInfo);
}

main()
	.then(process.exit)
	.catch((err) => {
		console.error(err);
		telegram.message(`⛑️ *Во время деплоя произошла ошибка*, ${website}...` + '\n' + `🔎 ${err}` + '\n' + metaInfo);
	});

handleExit(telegram, website, metaInfo);

/** @typedef {import('@frylo/pftp').Credentials} Credentials */
/** @typedef {import('@frylo/pftp').Configuration} Configuration */

/** @typedef {{ domain: string, label: string }} MetaInfo */
/** @typedef {Record<string, Credentials & Pick<Configuration, 'remoteFolder'> & MetaInfo>} HostingCreds */
