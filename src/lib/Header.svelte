<script>
	import { t, locale, locales, loadTranslations } from '$i18n/index';
	import { lang, localz } from '$i18n/i18n';
	import Icon from '$lib/Icon.svelte';

	$: console.log('lang', $lang);
	$: console.log('localz', $localz);
</script>

<div class="flex justify-between items-center h-full">
	<div class="flex items-center space-x-2">
		<div class="h-12 w-12 bg-white rounded-r-full flex items-center">
			<div class="h-10 w-12">
				<Icon icon="svelte" />
			</div>
		</div>

		<h1 class="text-white font-bold uppercase flex space-x-1">
			<div>Svelte</div>
			<div>Society</div>
			<div class="opacity-70">France</div>
			<!-- <div class="flex bg-white">
				<span class="text-red-600">FR</span>
				<span class="text-white">AN</span>
				<span class="text-blue-600">CE</span>
			</div> -->
		</h1>
	</div>
	<div class="flex text-white text-xs space-x-2">
		<a href="/">{$t('header.home')}</a>
		<a href="/about">{$t('header.about')}</a>
	</div>
	<div>
		<select
			bind:value={$lang}
			class="appearance-none bg-svelte-400 border-svelte-400 border rounded-lg flex items-center pl-2.5"
		>
			{#each Object.keys($localz) as key}
				<option value={key} class="bg-zinc-500">
					{$localz[key]}
				</option>
			{/each}
		</select>
	</div>
</div>
