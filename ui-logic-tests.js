var assert = require('assert');

var mod = require('./ui-logic.js');

describe('RCSIdiomaticLogicFormatMarkdown', function test_RCSIdiomaticLogicFormatMarkdown() {

	it('returns constant', function () {
		assert.strictEqual(mod.RCSIdiomaticLogicFormatMarkdown(), 'kRCSIdiomaticLogicFormatMarkdown');
	});

});

describe('RCSIdiomaticLogicFormatHTML', function test_RCSIdiomaticLogicFormatHTML() {

	it('returns constant', function () {
		assert.strictEqual(mod.RCSIdiomaticLogicFormatHTML(), 'kRCSIdiomaticLogicFormatHTML');
	});

});

describe('RCSIdiomaticLogicFormatRTF', function test_RCSIdiomaticLogicFormatRTF() {

	it('returns constant', function () {
		assert.strictEqual(mod.RCSIdiomaticLogicFormatRTF(), 'kRCSIdiomaticLogicFormatRTF');
	});

});

describe('RCSIdiomaticLogicFormatsArray', function test_RCSIdiomaticLogicFormatsArray() {

	it('returns constant', function () {
		assert.deepEqual(mod.RCSIdiomaticLogicFormatsArray(), [
			mod.RCSIdiomaticLogicFormatMarkdown(),
			mod.RCSIdiomaticLogicFormatHTML(),
			mod.RCSIdiomaticLogicFormatRTF()
		]);
	});

});

describe('RCSIdiomaticLogicHTMLForMarkdown', function test_RCSIdiomaticLogicHTMLForMarkdown() {

	it('throws if not string', function () {
		assert.throws(function () {
			mod.RCSIdiomaticLogicHTMLForMarkdown(null);
		}, /RCSErrorInputNotValid/);
	});

	it('returns string', function () {
		assert.strictEqual(mod.RCSIdiomaticLogicHTMLForMarkdown('alfa'), '<p>alfa</p>');
	});

	it('returns html if markdown', function () {
		assert.strictEqual(mod.RCSIdiomaticLogicHTMLForMarkdown('_alfa_'), '<p><em>alfa</em></p>');
	});

});

describe('RCSIdiomaticLogicMarkdownForHTML', function test_RCSIdiomaticLogicMarkdownForHTML() {

	it('throws if not string', function () {
		assert.throws(function () {
			mod.RCSIdiomaticLogicMarkdownForHTML(null);
		}, /RCSErrorInputNotValid/);
	});

	it('returns string', function () {
		assert.strictEqual(mod.RCSIdiomaticLogicMarkdownForHTML('alfa'), 'alfa');
	});

	it('returns markdown if html', function () {
		assert.strictEqual(mod.RCSIdiomaticLogicMarkdownForHTML('<em>alfa</em>'), '_alfa_');
	});

	it('uses pound heading style', function () {
		assert.strictEqual(mod.RCSIdiomaticLogicMarkdownForHTML('<h1>alfa</h1>'), '# alfa');
	});

	it('uses hyphen bullet style', function () {
		assert.strictEqual(mod.RCSIdiomaticLogicMarkdownForHTML('<ul><li>alfa</li></ul>'), '-   alfa');
	});

});
