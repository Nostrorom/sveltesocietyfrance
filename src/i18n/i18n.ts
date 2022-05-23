import { readable, writable, type Readable, type Writable } from 'svelte/store';
import type { Supportedi18n, LanguageList } from '$types/i18n';

export const lang: Writable<Supportedi18n> = writable('fr');
export const localz: Readable<LanguageList> = readable({ fr: '🇫🇷', en: '🇬🇧' });
