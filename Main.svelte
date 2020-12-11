<script>
import Header from './ModuleHeader.svelte'
import PaneSource from './ModulePaneSource.svelte'
import PaneOutput from './ModulePaneOutput.svelte'

import { OLSKLocalized } from 'OLSKInternational';

import OLSKString from 'OLSKString';
export const OLSKFormatted = OLSKString.OLSKStringFormatted;

import OLSKServiceWorker from './node_modules/OLSKServiceWorker/main.svelte';

let outputData
</script>

<div class="AppContainer">

<Header/>

<div id="ConvertContainer">
	<PaneSource bind:outputData />

	<PaneOutput {outputData} />
</div>

<OLSKServiceWorker OLSKServiceWorkerRegistrationRoute={ window.OLSKCanonical('RCIServiceWorkerRoute') } />

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
