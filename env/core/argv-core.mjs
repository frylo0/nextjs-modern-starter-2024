export function getArgument(startsWith) {
	return process.argv.find((token) => token.startsWith(startsWith));
}
export function hasArgument(argument) {
	return process.argv.findIndex((token) => token === argument) >= 0;
}
export function hasSomeArgument(argumentRegex) {
	return process.argv.findIndex((token) => argumentRegex.test(token)) >= 0;
}
