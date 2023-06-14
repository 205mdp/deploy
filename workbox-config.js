module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{svg,css,js,html}'
	],
	swDest: 'docs/sw.js',
	swSrc: 'src/sw-template.js',
	// ignoreURLParametersMatching: [
	// 	/^utm_/,
	// 	/^fbclid$/
	// ]
};