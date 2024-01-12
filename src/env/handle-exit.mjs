import process from 'process';

export function handleExit(telegram, website, metaInfo) {
	async function exitHandler(options) {
		if (options.exit) {
			if (options.force === true) {
				await telegram.message(`🪓 *Деплой завершен насильно*, ${website}...` + '\n' + metaInfo);
			} else {
				await telegram.message(`🐜 *Деплой неожиданно завершился*, ${website}...` + '\n' + metaInfo);
			}
		}
	}

	// For more info check this https://stackoverflow.com/a/14032965/12537042
	//catches ctrl+c event
	process.on('SIGINT', (exitCode) => {
		exitHandler
			.bind(null, { exit: true, force: true })(exitCode)
			.then(() => process.exit());
	});
	// catches "kill pid" (for example: nodemon restart)
	process.on('SIGUSR1', (exitCode) => {
		exitHandler
			.bind(null, { exit: true })(exitCode)
			.then(() => process.exit());
	});
	process.on('SIGUSR2', (exitCode) => {
		exitHandler
			.bind(null, { exit: true })(exitCode)
			.then(() => process.exit());
	});
}
