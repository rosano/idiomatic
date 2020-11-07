<script>
import { OLSKLocalized } from '../_shared/common/global.js'

import RCWRootLink from '../_shared/RCWRootLink/main.svelte';
import OLSKLanguageSwitcher from 'OLSKLanguageSwitcher';
</script>

<header class="Container">

<RCWRootLink RCWRootLinkImageURL="/logo.standard.svg" />

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
