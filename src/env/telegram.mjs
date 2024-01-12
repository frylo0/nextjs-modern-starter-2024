import TelegramBot from 'node-telegram-bot-api';

/** @typedef {{ chatId: string | null, token: string | null }} TelegramChatCreds  */

export class TelegramChat {
	token = null;
	chatId = null;
	disabled = null;

	/**
	 * @param {string} token
	 * @param {string} chatId
	 * @param {boolean} disabled
	 */
	constructor(token, chatId, disabled = false) {
		this.token = token;
		this.chatId = chatId;
		this.disabled = disabled;

		this.bot = new TelegramBot(this.token);
	}

	/**
	 * @param {string} message
	 */
	async message(message) {
		if (this.disabled) return;

		return this.bot.sendMessage(this.chatId, message, { disable_notification: false, parse_mode: 'Markdown' });
	}
}
