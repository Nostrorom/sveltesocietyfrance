import { createClient, type AuthChangeEvent, type Session } from '@supabase/supabase-js';
import { writable } from 'svelte/store';
import type { Card, List, Board } from '$types/db';

const supabase = createClient(
	import.meta.env.VITE_PUBLIC_SUPABASE_URL,
	import.meta.env.VITE_PUBLIC_SUPABASE_KEY
);

const userStore = writable(supabase.auth.user());

supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
	if (session) {
		if (event == 'SIGNED_IN') {
			userStore.set(session.user);
		} else if (event == 'SIGNED_OUT') {
			userStore.set(null);
		}
	}
});

export default {
	get user() {
		return userStore;
	},
	signIn(email: string) {
		return supabase.auth.signIn({ email });
	},
	signOut() {
		return supabase.auth.signOut();
	},
	boards: {
		async all() {
			const { body } = await supabase.from('boards').select('*').order('position');

			return body;
		},

		async get(id: string) {
			const { body } = await supabase
				.from('boards')
				.select('id, title, lists ( id, title, position, cards ( id, description, position ))')
				.eq('id', id)
				.order('position')
				.order('position', { foreignTable: 'lists' })
				.order('position', { foreignTable: 'lists.cards' })
				.single();

			return body;
		},

		async create(board: Board) {
			const { body } = await supabase.from('boards').insert(board);

			return body ? body[0] : null;
		},

		async update(board: Board) {
			const { body } = await supabase
				.from('boards')
				.update({ title: board.title })
				.match({ id: board.id });

			return body ? body[0] : null;
		},

		async sort(board: Board) {
			const { body } = await supabase.rpc('sort_board', {
				board_id: board.id,
				list_ids: board.lists.map((list) => list.id)
			});

			return body;
		}
	},

	lists: {
		async create(board: Board, data: List[]) {
			const { body } = await supabase.from('lists').insert({ board_id: board.id, ...data });

			const list = body ? body[0] : null;

			return { ...list, cards: [] };
		},

		async update(list: List) {
			const { body } = await supabase
				.from('lists')
				.update({ title: list.title })
				.match({ id: list.id });

			return body ? body[0] : null;
		},

		async sort(list: List) {
			const { body } = await supabase.rpc('sort_list', {
				new_list_id: list.id,
				card_ids: list.cards.map((card) => card.id)
			});

			return body;
		}
	},

	cards: {
		async create(list: List, data: Card[]) {
			const { body } = await supabase.from('cards').insert({ list_id: list.id, ...data });

			return body ? body[0] : null;
		},

		async update(card: Card) {
			const { body } = await supabase
				.from('cards')
				.update({ description: card.description })
				.match({ id: card.id });

			return body ? body[0] : null;
		}
	}
};
