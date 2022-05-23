<script lang="ts">
	import { supabase } from '$db/supabaseClient';

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

	const ping = async () => {
		const { data, error } = await supabase.from('testdb').select('*');

		console.log(data, error);
	};
</script>

<div class="m-20 p-12 border rounded-md shadow-lg border-zinc-300 space-y-5">
	<label>
		email
		<input class="bg-zinc-300 rounded-lg p-3 w-full" type="text" name="" id="" />
	</label>
	<button on:click={createUser} class="bg-blue-900 text-white p-3 rounded-lg">Send</button>
</div>
