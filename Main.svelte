<script>
import Header from './ModuleHeader.svelte'
import PaneSource from './ModulePaneSource.svelte'
import PaneOutput from './ModulePaneOutput.svelte'

import { OLSKLocalized } from '../../_shared/common/global.js'
import OLSKServiceWorker from '../../_shared/__external/OLSKServiceWorker/main.svelte';

let outputData
</script>

<div class="AppContainer">

<Header/>

<div id="ConvertContainer">
	<PaneSource bind:outputData />

	<PaneOutput {outputData} />
</div>

<OLSKServiceWorker OLSKServiceWorkerRegistrationRoute={ window.OLSKCanonicalFor('RCSServiceWorkerRoute') } />

</div>

<style>
.AppContainer {
	height: 100vh;

	font-family: 'Helvetica Neue', 'Helvetica', sans;

	/* AppContainerFlexbox:Parent */
	display: flex;
	flex-direction: column;
}

#ConvertContainer {
	/* AppContainerFlexbox:Child */
	flex-grow: 1;

	/* ConvertContainerFlexbox:Parent */
	display: flex;
}

.AppContainer :global(.ConvertPane) {
	/* ConvertContainerFlexbox:Child */
	flex-grow: 1;
	flex-basis: 50%;
}

.AppContainer :global(.PaneToolbar) {
	font-size: 14px;
}

.AppContainer :global(.PaneToolbar *) {
	display: inline-block;
	padding: 10px;
}
</style>
