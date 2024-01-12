import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..', '..');

const LOCAL_ENV = path.join(PROJECT_ROOT, '.env.local');
const LOCAL_ENV_COPY = path.join(PROJECT_ROOT, '.env.local-copy.local');

const isLocalEnvFile = fs.existsSync(LOCAL_ENV);
const isLocalCopyEnvFile = fs.existsSync(LOCAL_ENV_COPY);

if (isLocalEnvFile) fs.rmSync(LOCAL_ENV);

if (isLocalCopyEnvFile) {
	fs.cpSync(LOCAL_ENV_COPY, LOCAL_ENV);
	fs.rmSync(LOCAL_ENV_COPY);
}

console.log(`(!) Env has been reset to local one`);
