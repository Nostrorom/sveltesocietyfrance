<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	export let title: string = 'Svelte Summit Paris 2020';
	export let content: string;

	let date: Date = new Date(2022, 4, 17);
	let today: Date = new Date();
	let place: string = 'Paris';

	const diff: number = Math.round((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
	const year: number = date.getFullYear();
	const month: string = date.toLocaleString('fr-FR', { month: 'long' });
	const day: number = date.getDate();
	console.log(diff);
</script>

<di
	class="rounded-lg shadow-lg h-48 w-full flex flex-col justify-between overflow-hidden bg-gradient-to-tr from-zinc-50 to-white"
>
	<div
		class="text-svelte-600 mx-3 pt-5 pb-2 border-b border-svelte-600 flex items-center justify-between"
	>
		<h4 class=" font-extrabold">
			{title}
		</h4>
		<div class="text-xs rounded-lg bg-blue-100 text-blue-700 px-1.5 py-0.5">
			Dans {diff} jours
		</div>
	</div>
	<slot />
	<div class="px-3 ">
		{content}
	</div>
	<div
		class="text-blue-600 opacity-75 text-xs mx-4 pb-3 pt-2 space-y-1 border-t border-blue-600 border-opacity-50"
	>
		<div class="flex items-center space-x-2 ">
			<div class="opacity-60">
				<Icon icon="date" />
			</div>

			<div>
				{day}
				{month}
				{year}
			</div>
		</div>
		<div class="flex items-center space-x-2">
			<div class="opacity-50">
				<Icon icon="pin" />
			</div>
			<div>
				{place}
			</div>
		</div>
	</div>
</di>
