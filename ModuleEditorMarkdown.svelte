<script>
import { onMount } from 'svelte';

let editorElement;
export let editorValue;

onMount(function () {
	let instance = CodeMirror.fromTextArea(editorElement, {
		mode: 'markdown',
		lineNumbers: false,
		lineWrapping: true,
		extraKeys: {
			Enter: 'newlineAndIndentContinueMarkdownList',
			Esc: function () {
				return document.querySelector('input').focus();
			},
		},
	});

	instance.setValue(editorValue);

	instance.on('change', function (instance, changeObject) {
		if (changeObject.origin === 'setValue') {
			return;
		}

		editorValue = instance.getValue();
	});

	instance.focus();
});
</script>

<div class="EditorContainer">
	<textarea bind:this={editorElement}></textarea>
</div>

<style>
.EditorContainer	{
	position: relative;	
}
</style>
