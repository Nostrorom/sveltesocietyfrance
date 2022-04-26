import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */

export const config = {
  translations: {
    en: { lang },
    fr: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'header',
      loader: async () => (await import('./en/header.json')).default,
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./en/about.json')).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'fr',
      key: 'header',
      loader: async () => (await import('./fr/header.json')).default,
    },
    {
      locale: 'fr',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./fr/about.json')).default,
    },
    {
      locale: 'fr',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./fr/home.json')).default,
    },
  ],
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));