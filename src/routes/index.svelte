<script lang="ts">
	import { t } from '$i18n/index';
	import Card from '$lib/Card.svelte';

	import { user } from '$stores/session';
	import { supabase } from '$db/supabaseClient';
	import Auth from '$lib/Auth.svelte';
	import Profile from '$lib/Profile.svelte';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		if (session) {
			user.set(session.user);
		}
	});

	$: console.log($user);

	const pageName = 'This page is Home page!';
	const link = 'https://kit.svelte.dev';
</script>

<!-- 
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<!-- <div class="bg-gray-200">

	<h1>{$t('home.title')}</h1>
	<p>{@html $t('home.text', { link })}</p>
</div> -->
<!-- 
<div class="w-full px-24 bg-zinc-100 h-1/2 space-y-8 py-8">
	<Card content="saloute: Dem gonna be evens" />
	<Card content="saloute: Dem gonna be evens" />
	<Card content="saloute: Dem gonna be evens" />
</div> -->

<div class="h-1/2 p-8 pt-24">
	{#if $user}
		<Profile />
	{:else}
		<Auth />
	{/if}
</div>
