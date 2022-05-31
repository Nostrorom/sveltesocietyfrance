<script lang="ts">
	import { supabase } from '$db/supabaseClient';
	import Card from '$lib/Card.svelte';
	import { user } from '$stores/session';
	import type { User, Position, newEvent } from '$types/db';

	const createProfile = async () => {
		console.log('request goes');
		const { data, error } = await supabase.from('testdb').insert([
			{
				name: 'John',
				linkedin_url: 'https://chezoim'
			}
		]);

		console.log('DATA', data);
		console.log('ERROR', error);
	};

	const createUser = async () => {
		console.log('user goes');
		// const { user, session, error } = await supabase.auth.signUp({
		// 	email: 'arnaud.fouche@coddity.com',
		// 	password: '123456'
		// });

		const { user, session, error } = await supabase.auth.signIn({
			provider: 'github'
		});

		console.log('%cUSER', 'color:green', user);
		console.log('%cSESSION', 'color:coral', user);
		console.log('%cERROR', 'color:red', error);
	};

	// let user = {
	// 	email: 'john@bigood.com',
	// 	linkedin_url: 'https://linkedin.com'
	// };

	// class User {
	// 	id: string = '';
	// 	username: string = '';
	// 	github: string = '';
	// 	twitter: string = '';
	// 	linkedin: string = '';
	// 	email: string = '';
	// 	location!: Position;
	// }

	let newUser: User = {
		username: '',
		github: '',
		twitter: '',
		linkedin: '',
		email: '',
		organizer: import.meta.env.VITE_UUID
	};

	let newEvent: newEvent = {
		organizer: import.meta.env.VITE_UUID,
		date: new Date('2020-05-07'),
		location: 'Lyon'
	};

	const ping = async () => {
		const { data, error } = await supabase.from('users').insert(newUser);

		console.log(data, error);
	};

	const createEvent = async (): Promise<void> => {
		try {
			const { data, error } = await supabase.from('events').insert(newEvent);

			console.log(data, error);
		} catch (error) {
			throw new Error();
		}
	};

	$: console.log(newUser);
</script>

<div class="m-20 p-14 border rounded-md shadow-lg border-zinc-300 space-y-5">
	<form action="">
		<label>
			username
			<input
				class="bg-zinc-300 rounded-lg p-3 w-full"
				type="text"
				name="username"
				bind:value={newUser.username}
			/>
		</label>
		<label>
			email
			<input
				class="bg-zinc-300 rounded-lg p-3 w-full"
				type="text"
				name="email"
				bind:value={newUser.email}
			/>
		</label>
		<label>
			github
			<input
				class="bg-zinc-300 rounded-lg p-3 w-full"
				type="text"
				name="github"
				bind:value={newUser.github}
			/>
		</label>
		<label>
			twitter
			<input
				class="bg-zinc-300 rounded-lg p-3 w-full"
				type="text"
				name="twitter"
				bind:value={newUser.twitter}
			/>
		</label>
		<button on:click|preventDefault={createEvent} class="bg-blue-900 text-white p-3 rounded-lg"
			>Send</button
		>
	</form>
</div>
<section class="px-12">
	<Card content="summit" />
</section>
