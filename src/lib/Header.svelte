<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	const switchDarkmode = (): void => {
		if (localStorage.theme === 'light') {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	};
</script>

<div
	class="flex justify-center items-center h-full px-4 shadow-sm bg-white dark:bg-zinc-800 relative"
>
	<div class="flex items-center space-x-2">
		<h1 class=" font-bold uppercase flex space-x-1 items-center pt-1">
			<div class="">Svelte</div>
		</h1>
		<div class="h-10 w-10">
			<Icon icon="svelte" size="h-10 w-10" />
		</div>

		<h1 class=" font-bold uppercase flex space-x-1 items-center pt-1">
			<div>
				Soci<span class="text-blue-500 dark:text-blue-400">é</span><span
					class="text-zinc-400 dark:text-white">t</span
				><span class="text-red-600 dark:text-red-500">é</span>
			</div>
		</h1>
	</div>
	<div class="absolute top-0 right-0 h-full flex items-center justify-center">
		<button on:click={switchDarkmode} class="h-full w-full px-3 hover:text-svelte-600">
			<Icon icon="darkmode" size="h-4 w-4" />
		</button>
	</div>
</div>
