var assert = require('assert');

var mainModule = require('./ui-logic.js');

describe('RCSIdiomaticLogicFormatMarkdown', function test_RCSIdiomaticLogicFormatMarkdown() {

	it('returns constant', function () {
		assert.strictEqual(mainModule.RCSIdiomaticLogicFormatMarkdown(), 'kRCSIdiomaticLogicFormatMarkdown');
	});

});

describe('RCSIdiomaticLogicFormatHTML', function test_RCSIdiomaticLogicFormatHTML() {

	it('returns constant', function () {
		assert.strictEqual(mainModule.RCSIdiomaticLogicFormatHTML(), 'kRCSIdiomaticLogicFormatHTML');
	});

});

describe('RCSIdiomaticLogicFormatRTF', function test_RCSIdiomaticLogicFormatRTF() {

	it('returns constant', function () {
		assert.strictEqual(mainModule.RCSIdiomaticLogicFormatRTF(), 'kRCSIdiomaticLogicFormatRTF');
	});

});

describe('RCSIdiomaticLogicFormatsArray', function test_RCSIdiomaticLogicFormatsArray() {

	it('returns constant', function () {
		assert.deepEqual(mainModule.RCSIdiomaticLogicFormatsArray(), [
			mainModule.RCSIdiomaticLogicFormatMarkdown(),
			mainModule.RCSIdiomaticLogicFormatHTML(),
			mainModule.RCSIdiomaticLogicFormatRTF()
		]);
	});

});

describe('RCSIdiomaticLogicHTMLForMarkdown', function test_RCSIdiomaticLogicHTMLForMarkdown() {

	it('throws if not string', function () {
		assert.throws(function () {
			mainModule.RCSIdiomaticLogicHTMLForMarkdown(null);
		}, /RCSErrorInputNotValid/);
	});

	it('returns string', function () {
		assert.strictEqual(mainModule.RCSIdiomaticLogicHTMLForMarkdown('alfa'), '<p>alfa</p>');
	});

	it('returns html if markdown', function () {
		assert.strictEqual(mainModule.RCSIdiomaticLogicHTMLForMarkdown('_alfa_'), '<p><em>alfa</em></p>');
	});

});

describe('RCSIdiomaticLogicMarkdownForHTML', function test_RCSIdiomaticLogicMarkdownForHTML() {

	it('throws if not string', function () {
		assert.throws(function () {
			mainModule.RCSIdiomaticLogicMarkdownForHTML(null);
		}, /RCSErrorInputNotValid/);
	});

	it('returns string', function () {
		assert.strictEqual(mainModule.RCSIdiomaticLogicMarkdownForHTML('alfa'), 'alfa');
	});

	it('returns markdown if html', function () {
		assert.strictEqual(mainModule.RCSIdiomaticLogicMarkdownForHTML('<em>alfa</em>'), '_alfa_');
	});

	it('uses pound heading style', function () {
		assert.strictEqual(mainModule.RCSIdiomaticLogicMarkdownForHTML('<h1>alfa</h1>'), '# alfa');
	});

	it('uses hyphen bullet style', function () {
		assert.strictEqual(mainModule.RCSIdiomaticLogicMarkdownForHTML('<ul><li>alfa</li></ul>'), '-   alfa');
	});

});
