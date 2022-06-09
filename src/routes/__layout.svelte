<script lang="ts">
	import '../app.css';
	import '@fontsource/overpass';
	import Header from '$lib/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	import { browser } from '$app/env';

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<body class="font-sans bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm">
	<header class="fixed top-0 h-14 w-full ">
		<Header />
	</header>

	<div class="h-screen pt-14 flex">
		<nav class="w-1/4">
			<Sidebar />
		</nav>
		<main class="w-3/4">
			<slot />
		</main>
	</div>
</body>
