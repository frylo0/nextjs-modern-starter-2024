/** @typedef {import('@frylo/pftp').Credentials} Credentials */
/** @typedef {import('@frylo/pftp').Configuration} Configuration */

/** @type {Record<string, Credentials & Pick<Configuration, 'remoteFolder'>>} */
export const creds = {
	stage: {
		host: '0.0.0.0',
		port: 22,
		protocol: 'sftp',
		username: 'username',
		password: 'password',

		remoteFolder: '/var/www/stage',
	},
	production: {
		host: '0.0.0.0',
		port: 22,
		protocol: 'sftp',
		username: 'username',
		password: 'password',

		remoteFolder: '/var/www/production',
	},
};
