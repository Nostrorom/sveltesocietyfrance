<script lang="ts">
	import type { MenuSection } from '$types/main';

	export let section: MenuSection;
	// export let links: Link[];
	// export let title: string;
</script>

<div class="space-y-1 py-2">
	<h6 class="uppercase tracking-wider">{section.title}</h6>
	{#each section.links as link}
		<div class="cursor-pointer">
			<a href={link.href} target={link.out ? '_blank' : ''} alt={link.alt ? link.alt : link.name}>
				{link.name}
			</a>
		</div>
	{/each}
</div>
