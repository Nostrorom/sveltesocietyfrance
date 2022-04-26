import { readable, writable } from 'svelte/store';

export const lang = writable('fr');
export const localz = readable({ fr: '🇫🇷' , en: '🇬🇧' });
