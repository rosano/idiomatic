const kRCSServiceWorkerVersionID = Date.now().toString();

const OLSKServiceWorker = require('OLSKServiceWorker');

exports.OLSKControllerRoutes = function () {
	return {
		RCSIdiomaticRoute: {
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKLayoutRender(require('path').join(__dirname, 'view'), {
					RCSIdiomaticConvertSourceSampleData: require('fs').readFileSync(require('path').join(__dirname, `sample.${ res.locals.OLSKSharedPageCurrentLanguage }.md`), 'utf8')
				});
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es'],
		},
		RCIServiceWorkerRoute: {
			OLSKRoutePath: '/sw.js',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction(req, res, next) {
				return res.type('js').send(OLSKServiceWorker.OLSKServiceWorkerView({
					VERSION_ID_TOKEN: kRCSServiceWorkerVersionID,
					ORIGIN_PAGE_PATH_TOKEN: res.locals.OLSKCanonical('RCSIdiomaticRoute'),
				}));
			},
		},
	};
};

exports.OLSKControllerSharedStaticAssetFolders = function () {
	return require('fs').existsSync(require('path').join(__dirname, 'node_modules')) ? [
		'_shared/__external',
	] : [];
};
