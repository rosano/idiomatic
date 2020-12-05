<script>
import { OLSKLocalized } from 'OLSKInternational';

import RCWRootLink from '../_shared/RCWRootLink/main.svelte';
import OLSKLanguageSwitcher from '../_shared/__external/OLSKLanguageSwitcher/main.svelte';
</script>

<header class="Container">

<RCWRootLink RCWRootLinkImageURL="/_shared/__external/ROCORootLink/identity-transparent.svg" />

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

:global(.RCWRootLink) {
	color: inherit;
}

:global(.RCWRootLink img) {
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
