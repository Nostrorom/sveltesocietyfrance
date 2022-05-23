<script lang="ts">
	import { supabase } from '$db/supabaseClient';
	import { user } from '$stores/session';
	import type { User } from '@supabase/supabase-js';

	let loading: boolean = true;
	let username: string | null = null;
	let website: string | null = null;
	let avatar_url: string | null = null;

	async function getProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();
			if (user) {
				let { data, error, status } = await supabase
					.from('profiles')
					.select(`username, website, avatar_url`)
					.eq('id', user.id)
					.single();

				if (error && status !== 406) throw error;

				if (data) {
					username = data.username;
					website = data.website;
					avatar_url = data.avatar_url;
				}
			}
		} catch (error: any) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}

	async function updateProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();
			if (user) {
				const updates = {
					id: user.id,
					username,
					website,
					avatar_url,
					updated_at: new Date()
				};
				let { error } = await supabase.from('profiles').upsert(updates, {
					returning: 'minimal' // Don't return the value after inserting
				});
				if (error) throw error;
			}
		} catch (error: any) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}

	async function signOut() {
		console.log('sign out');
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error: any) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}
</script>

<form use:getProfile class="form-widget" on:submit|preventDefault={updateProfile}>
	<div>
		<label for="email">Email</label>
		<input id="email" type="text" value={$user.email} disabled />
	</div>
	<div>
		<label for="username">Name</label>
		<input id="username" type="text" bind:value={username} />
	</div>
	<div>
		<label for="website">Website</label>
		<input id="website" type="website" bind:value={website} />
	</div>

	<div>
		<input
			type="submit"
			class="button block primary"
			value={loading ? 'Loading ...' : 'Update'}
			disabled={loading}
		/>
	</div>

	<div>
		<button class="button block" on:click={signOut} disabled={loading}> Sign Out </button>
	</div>
</form>
