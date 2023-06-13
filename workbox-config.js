module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{svg,css,js,html}'
	],
	swDest: 'docs/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};