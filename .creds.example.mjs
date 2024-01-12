/** @type {HostingCreds} */
export const creds = {
	stage: {
		host: '0.0.0.0',
		port: 22,
		protocol: 'sftp',
		username: 'username',
		password: 'password',

		remoteFolder: '/var/www/stage',

		domain: 'stage.fe-domain.com',
		label: '🧪 Stage',
	},
	production: {
		host: '0.0.0.0',
		port: 22,
		protocol: 'sftp',
		username: 'username',
		password: 'password',

		remoteFolder: '/var/www/production',

		domain: 'fe-domain.com',
		label: '👁️ Production',
	},
};

/** @type {TelegramChatCreds} */
export const telegramBot = {
	chatId: null, // positive or negative number as string
	token: null, // string
};

/** @typedef {import('./src/env/telegram.mjs').TelegramChatCreds} TelegramChatCreds */
/** @typedef {import('./src/env/deploy.mjs').HostingCreds} HostingCreds */
