<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	export let title: string = 'Svelte Summit Paris 2020';
	export let content: string;

	let date: Date = new Date('2022-6-1');
	let today: Date = new Date();
	let place: string = 'Paris';

	const diff: number = Math.round((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
	const year: number = date.getFullYear();
	const month: string = date.toLocaleString('fr-FR', { month: 'long' });
	const day: number = date.getDate();
	console.log(diff);
</script>

<div
	class="cursor-default rounded-lg shadow-md w-full flex flex-col justify-between overflow-hidden bg-gradient-to-tr from-zinc-50 to-white px-4 py-4"
>
	<div
		class="text-svelte-600 pt-4 pb-2 border-b border-svelte-600 flex items-center justify-between text-xl"
	>
		<h4 class=" font-extrabold">
			{title}
		</h4>
	</div>
	<slot />

	<div class="text-sm pb-3 pt-2 flex justify-between">
		<div class="flex items-center space-x-2">
			<Icon icon="pin" />
			<div>
				{place}
			</div>
		</div>
		<div class="flex space-x-2 items-center justify-between">
			<Icon icon="date" />
			<div class="">
				{day}
				{month}
				{year}
			</div>
			{#if diff >= 0}
				<div class="rounded-lg bg-zinc-100 px-1.5 py-0.5 italic">
					Dans {diff} jours
				</div>
			{/if}
		</div>
	</div>
	<div class="">
		{content}
	</div>
</div>
