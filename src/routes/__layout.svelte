<script lang="ts">
	import '../app.css';
	import '@fontsource/overpass';
	import Header from '$lib/Header.svelte';
</script>

<body class="font-sans text-zinc-600 bg-zinc-50">
	<header class="fixed top-0 h-14 w-full ">
		<Header />
	</header>

	<main class="h-screen pt-14">
		<slot />
	</main>
</body>
