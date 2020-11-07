<script>
import { onMount } from 'svelte';

let editorElement;
export let editorValue;

onMount(function () {
	let instance = CodeMirror.fromTextArea(editorElement, {
		mode: 'text/html',
		lineNumbers: true,
		lineWrapping: true,
		extraKeys: {
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
