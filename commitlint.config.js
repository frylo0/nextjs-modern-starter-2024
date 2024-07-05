const OK = true;
const ERROR = false;

if (!RegExp.escape) {
	RegExp.escape = function (s) {
		return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	};
}

module.exports = {
	rules: {
		'task-numbers': [2, 'always', 'NEXT-'], // Replace 'NEXT-' with your Jira task prefix
	},
	plugins: [
		{
			rules: {
				'task-numbers': (context, status, value) => {
					const { header } = context;

					const projectPrefix = RegExp.escape(value);

					const rTaskNumber = String.raw`(${projectPrefix}\d+|NOTASK)`;
					const rSentence = String.raw`\p{Lu}[\p{N}\p{L}\p{Pd},\-()\[\]'@#$%^&*+\s]+`;

					const startsFromTaskNumber = new RegExp(`^${rTaskNumber}: `, 'u');
					const messageIsSentences = new RegExp(`^${rSentence}(\\.\\s${rSentence})*$`, 'u');

					if (!startsFromTaskNumber.test(header)) {
						return [
							ERROR,
							`Invalid task number. Message have to start from task number (e.g. ${projectPrefix}000 or NOTASK)`,
						];
					}

					const [taskNumber, message] = header.split(': ');

					if (!messageIsSentences.test(message)) {
						return [ERROR, `Invalid message. Messages have to be in sentence form (e.g. "First, second. Third")`];
					}

					return [OK, ''];
				},
			},
		},
	],
};
