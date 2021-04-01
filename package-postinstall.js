(function OLSKHotfixLaunchletForSkipWait() {
	const filePath = './node_modules/ROCORootLink/main.svelte';
	require('fs').writeFileSync(filePath, require('OLSKString').OLSKStringPatch(
		require('fs').readFileSync(filePath, 'utf8'),
		'identity.svg',
		'identity-transparent.svg',
	));
})();

(function OLSKPostinstallExternalAssets() {
	if (!require('fs').existsSync(require('path').join(__dirname, 'node_modules'))) {
		return;
	}
	
	require('./node_modules/OLSKExpress/modules/OLSKAssets/main.js').OLSKAssetsCopyAssetsFromTo([
		'normalize.css',
		'turndown',
		'turndown-plugin-gfm',
		'showdown',
		'codemirror',
		'pell',
		'OLSKInternational',
		'OLSKString',
		'OLSKRouting',
		'OLSKServiceWorker',
		'OLSKDecor',
		'OLSKLanguageSwitcher',
		'OLSKRootLink',
		'OLSKUIAssets',
		'ROCORootLink',
	], require('path').join(__dirname, 'node_modules'), require('path').join(__dirname, '_shared/__external'));
})();
