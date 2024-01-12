import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const targetEnvNameValue = process.argv.find((arg) => arg.startsWith('--name='));

if (!targetEnvNameValue)
	throw new Error(`No env name provided to pick-env.mjs. Try use it like this "node pick-env.mjs --name=development"`);

const targetEnvName = targetEnvNameValue.replace('--name=', '').trim();

const PROJECT_ROOT = path.join(__dirname, '..', '..');

const TARGET_ENV = path.join(PROJECT_ROOT, `.env.${targetEnvName}`);
const LOCAL_ENV = path.join(PROJECT_ROOT, '.env.local');
const LOCAL_ENV_COPY = path.join(PROJECT_ROOT, '.env.local-copy.local');

const isTargetEnvFile = fs.existsSync(TARGET_ENV);
const isLocalEnvFile = fs.existsSync(LOCAL_ENV);
const isLocalCopyEnvFile = fs.existsSync(LOCAL_ENV_COPY);

if (isLocalCopyEnvFile) fs.rmSync(LOCAL_ENV_COPY);
if (isLocalEnvFile) fs.cpSync(LOCAL_ENV, LOCAL_ENV_COPY);

if (!isTargetEnvFile) throw new Error(`No target env file '${TARGET_ENV}'`);

fs.cpSync(TARGET_ENV, LOCAL_ENV);

console.log(`(!) Picked env with name "${targetEnvName}"\n`);
