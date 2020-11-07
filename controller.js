//_ OLSKControllerRoutes

exports.OLSKControllerRoutes = function () {
	return {
		RCSIdiomaticRoute: {
			OLSKRoutePath: '/idiomatic',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction (req, res, next) {
				return res.render(require('path').join(__dirname, 'view'), {
					RCSIdiomaticConvertSourceSampleData: require('fs').readFileSync(require('path').join(__dirname, `sample.${ res.locals.OLSKSharedPageCurrentLanguage }.md`), 'utf8')
				});
			},
			OLSKRouteLanguages: ['en', 'fr', 'es'],
		},
	};
};
