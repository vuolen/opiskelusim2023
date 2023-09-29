module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{tsx,svg,ts,js,css,json}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};