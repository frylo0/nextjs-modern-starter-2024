// Place this file at the root of project

/** @type {import('./env/deploy.mjs').Configuration} */
const credentials = {
	$: {
		bot: {
			baseUrl: 'https://api.telegram.org/bot',
			chatId: '',
			token: '',
		},
	},

	localhost: {
		pretasks: {
			createEnvTSFile: {
				authorization: false,
				adminPanel: 'https://test.be-domain.com',
			},
		},
	},

	testing: {
		host: '',
		isSftp: true, // usually: true means port 22, false means port 21
		port: 22,
		username: '',
		password: '',
		localFolderPath: './out',
		remoteFolderPath: '/var/www/fe-test-host',
		website: '[🧪 Testing](https://test.fe-domain.com)',
		pretasks: {
			createEnvTSFile: {
				authorization: true,
				adminPanel: 'https://test.be-domain.com',
			},
		},
	},

	production: {
		host: '',
		isSftp: true, // usually: true means port 22, false means port 21
		port: 22,
		username: '',
		password: '',
		localFolderPath: './out',
		remoteFolderPath: '/var/www/fe-prod-host',
		website: '[🏆 Production](https://fe-domain.com)',
		pretasks: {
			createEnvTSFile: {
				authorization: false,
				adminPanel: 'https://be-domain.com',
			},
		},
	},
};

export default credentials;
