<script>
import { OLSKLocalized } from '../_shared/common/global.js'
export let outputData
</script>

<div class="Container ConvertPane">

<div class="PaneToolbar">
	<span>{ OLSKLocalized('RCSIdiomaticConvertOutputToolbarPreviewText') }</span>
</div>

<div id="OutputBodyContainer">{@html outputData}</div>

</div>

<style>
.Container {
	/* ContainerFlexbox:Parent */
	display: flex;
	flex-direction: column;
}

.PaneToolbar {
	background: #e6e6e6;
}

#OutputBodyContainer {
	background: #f1f1f1;
	padding: 10px;

	overflow: auto;

	/* ContainerFlexbox:Child */
	flex-grow: 1;
}
</style>
