<script>
import { onMount } from 'svelte';

let editorElement;
export let editorValue;

onMount(function () {
	let instance = pell.init({
		element: editorElement,
		onChange: function (inputData) {
			editorValue = inputData;
		},
		defaultParagraphSeparator: 'p',
		actions: [
			'bold',
			'italic',
			'underline',
		],
	});

	instance.onkeydown = function (event) {
		if (event.key === 'Escape') {
		  return document.querySelector('button').focus();
		}

		if (event.key !== 'Tab') {
		  return;
		}

		event.preventDefault();

		if (event.shiftKey) {
			return pell.exec('outdent');
		}

		pell.exec('indent');
	};

	instance.content.innerHTML = editorValue;

	instance.content.focus();
});
</script>

<div class="EditorContainer" bind:this={editorElement}></div>

<style>
.EditorContainer	{
	/* EditorContainerFlexbox:Parent */
	display: flex;
	flex-direction: column;
}

.EditorContainer :global(.pell-content) {
	background: #fff;

	/* EditorContainerRTFFlexbox:Child */
	flex-grow: 1;
}
</style>
