<script lang="ts" context="module">
	import { t, locale, locales, loadTranslations } from '$lib/i18n';

	/** @type {import('@sveltejs/kit').Load} */

	export const load = async ({ url }: { url: { pathname: string } }) => {
		const { pathname } = url;

		const defaultLocale = 'fr';

		// const initLocale = locale.get() || defaultLocale; // set default if no locale already set
		const initLocale = defaultLocale; // set default if no locale already set

		await loadTranslations(initLocale, pathname); // keep this just before the `return`

		return {};
	};
</script>

<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import '@fontsource/inter';

	// console.log($locales, $t('lang.fr'));
	console.log($t('translations.fr'));
</script>

<header class="fixed top-0 h-12 bg-svelte-600 w-full antialiased ">
	<Header />
</header>

<main class="antialiased text-zinc-500 h-screen">
	<slot />
</main>
