<script lang="ts">
	import { supabase } from '$db/supabaseClient';
	const createUser = async () => {
		console.log('user goes');
		// const { user, session, error } = await supabase.auth.signIn({
		// 	email: 'arnaud.fouche@coddity.com',
		// 	password: '123456'
		// });

		const { user, session, error } = await supabase.auth.signIn({
			provider: 'github'
		});

		console.log('%cUSER', 'color:green', user);
		console.log('%cSESSION', 'color:coral', session);
		console.log('%cERROR', 'color:red', error);
	};
</script>

<div on:click={createUser} class="p-12 text-xl">Hello</div>
