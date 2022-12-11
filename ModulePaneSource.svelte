<script>
import { OLSKLocalized } from 'OLSKInternational';

import EditorMarkdown from './ModuleEditorMarkdown.svelte'
import EditorHTML from './ModuleEditorHTML.svelte'
import EditorRTF from './ModuleEditorRTF.svelte'
const RCSIdomaticLogic = window.RCSIdomaticLogic;

let sourceData = window.OLSKPublicConstants('RCSIdiomaticConvertSourceSampleData')
export let outputData

let sourceFormats = RCSIdomaticLogic.RCSIdiomaticLogicFormatsArray()
let selectedFormat = sourceFormats[0]

let convertFunctionMap = RCSIdomaticLogic.RCSIdiomaticLogicFormatsArray().reduce(function (coll, sourceFormat) {
		return (coll[sourceFormat] = RCSIdomaticLogic.RCSIdiomaticLogicFormatsArray().reduce(function (coll, destinationFormat) {
			return (coll[destinationFormat] = (function () {
				if (destinationFormat === RCSIdomaticLogic.RCSIdiomaticLogicFormatMarkdown()) {
					return RCSIdomaticLogic.RCSIdiomaticLogicMarkdownForHTML
				}

				if (sourceFormat === RCSIdomaticLogic.RCSIdiomaticLogicFormatMarkdown()) {
					return RCSIdomaticLogic.RCSIdiomaticLogicHTMLForMarkdown
				}

				return function (e) {
					return e
				}
			})()) && coll;
		}, {})) && coll;
	}, {})

let _selectedFormat
let selectedFormatDidChange = function (inputData) {
	if (_selectedFormat && _selectedFormat !== inputData) {
		sourceData = convertFunctionMap[_selectedFormat][inputData](sourceData)
	}

	_selectedFormat = inputData
}
$: selectedFormatDidChange(selectedFormat)

let sourceDataDidChange = function (inputData) {
	outputData = convertFunctionMap[selectedFormat][RCSIdomaticLogic.RCSIdiomaticLogicFormatHTML()](inputData)
}
$: sourceDataDidChange(sourceData)
</script>

<div class="Container ConvertPane">

<div class="PaneToolbar">
	{#each sourceFormats as e, i}
		<input type="radio" bind:group="{ selectedFormat }" value="{ e }" accesskey="{ i + 1 }" id="SourceFormat{ e }">
		<label for="SourceFormat{ e }">
			{#if selectedFormat === RCSIdomaticLogic.RCSIdiomaticLogicFormatMarkdown()}
				{ OLSKLocalized('RCSIdiomaticConvertToolbarButtonOptionMarkdownText') }
			{/if}
			{#if selectedFormat === RCSIdomaticLogic.RCSIdiomaticLogicFormatHTML()}
				{ OLSKLocalized('RCSIdiomaticConvertToolbarButtonOptionHTMLText') }
			{/if}
			{#if selectedFormat === RCSIdomaticLogic.RCSIdiomaticLogicFormatRTF()}
				{ OLSKLocalized('RCSIdiomaticConvertToolbarButtonOptionRTFText') }
			{/if}
		</label>
	{/each}
</div>

{#if selectedFormat === RCSIdomaticLogic.RCSIdiomaticLogicFormatMarkdown()}
	<EditorMarkdown bind:editorValue="{sourceData}" />
{/if}

{#if selectedFormat === RCSIdomaticLogic.RCSIdiomaticLogicFormatHTML()}
	<EditorHTML bind:editorValue="{sourceData}" />
{/if}

{#if selectedFormat === RCSIdomaticLogic.RCSIdiomaticLogicFormatRTF()}
	<EditorRTF bind:editorValue="{sourceData}" />
{/if}

</div>

<style>
.Container {
	/* ContainerFlexbox:Parent */
	display: flex;
	flex-direction: column;
}

.PaneToolbar {
	background: #d9d9d9;
}

.PaneToolbar input {
	display: none;
}

.PaneToolbar input:checked + label {
	background: #cccccc;
}

.PaneToolbar label {
	cursor: pointer;
}

:global(.EditorContainer) {
	/* ContainerFlexbox:Child */
	flex-grow: 1;
}

:global(.CodeMirror) {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;

	/* override defaults */
	height: 100%;
}

:global(.CodeMirror) pre {
	word-break: break-all;
}
</style>
