(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.RCSIdomaticLogic = global.RCSIdomaticLogic || {})));
}(this, (function (exports) { 'use strict';

	const showdownPackage = typeof require === 'undefined' ? window.showdown : require('showdown');
	const showdownConverter = new showdownPackage.Converter();
	showdownConverter.setOption('simpleLineBreaks', true);
	showdownConverter.setOption('simplifiedAutoLink', true);
	showdownConverter.setOption('noHeaderId', true);
	showdownConverter.setOption('strikethrough', true);
	showdownConverter.setOption('tables', true);

	const turndownPackage = typeof require === 'undefined' ? window.TurndownService : require('turndown');
	const turndownPluginGFMPackage = typeof require === 'undefined' ? window.turndownPluginGfm : require('turndown-plugin-gfm');
	const turndownInstance = new turndownPackage({
		headingStyle: 'atx',
		bulletListMarker: '-',
	});
	turndownInstance.use(turndownPluginGFMPackage.gfm);
	turndownInstance.remove('title');
	turndownInstance.remove('script');
	turndownInstance.remove('style');

	const mod = {

		RCSIdiomaticLogicFormatMarkdown () {
			return 'kRCSIdiomaticLogicFormatMarkdown';
		},

		RCSIdiomaticLogicFormatHTML () {
			return 'kRCSIdiomaticLogicFormatHTML';
		},

		RCSIdiomaticLogicFormatRTF () {
			return 'kRCSIdiomaticLogicFormatRTF';
		},

		RCSIdiomaticLogicFormatsArray () {
			return [
				mod.RCSIdiomaticLogicFormatMarkdown(),
				mod.RCSIdiomaticLogicFormatHTML(),
				mod.RCSIdiomaticLogicFormatRTF(),
			];
		},

		RCSIdiomaticLogicHTMLForMarkdown (inputData) {
			if (typeof inputData !== 'string') {
				throw new Error('RCSErrorInputNotValid');
			}

			return showdownConverter.makeHtml(inputData);
		},

		RCSIdiomaticLogicMarkdownForHTML (inputData) {
			if (typeof inputData !== 'string') {
				throw new Error('RCSErrorInputNotValid');
			}

			return turndownInstance.turndown(inputData);
		},

	};

	Object.assign(exports, mod);

	Object.defineProperty(exports, '__esModule', { value: true });

})));
