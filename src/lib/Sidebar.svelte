<script lang="ts">
	import SidebarSection from '$lib/SidebarSection.svelte';
	import menu from '$stores/menu.json';
	import type { MenuSection } from '$types/main';

	const sections = menu as MenuSection[];
</script>

<div class="bg-zinc-500 dark:bg-zinc-700 h-full text-white dark:text-zinc-200 py-6 px-6 space-y-2">
	{#each sections as section}
		<SidebarSection {section} />
	{/each}
</div>
