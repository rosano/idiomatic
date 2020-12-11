<script>
import { OLSKLocalized } from 'OLSKInternational';

import ROCORootLink from './node_modules/ROCORootLink/main.svelte';
import OLSKLanguageSwitcher from './node_modules/OLSKLanguageSwitcher/main.svelte';
</script>

<header class="Container">

<ROCORootLink />

<h1>{ OLSKLocalized('RCSIdiomaticTitle') }</h1>

<OLSKLanguageSwitcher OLSKSharedActiveRouteConstant={ window.OLSKPublicConstants('OLSKSharedActiveRouteConstant') }
	OLSKSharedPageLanguagesAvailable={ window.OLSKPublicConstants('OLSKSharedPageLanguagesAvailable') }
	OLSKSharedPageCurrentLanguage={ window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage') }
	/>
	
</header>

<style>
.Container {
	/* AppContainerFlexbox:Child */
	flex-shrink: 0;

	/* ContainerFlexbox:Parent */
	display: flex;
	justify-content: space-between;
	align-items: center;
}

:global(.ROCORootLink) {
	color: inherit;
}

:global(.ROCORootLink img) {
	width: 36px;
}

h1 {
	margin: 0;

	font-size: 20px;
}

:global(.OLSKLanguageSwitcher) {
	padding: 10px;

	font-size: 13px;
}

:global(.OLSKLanguageSwitcher span) {
	/* browser quirks */
	padding-left: 4px;
}
</style>
