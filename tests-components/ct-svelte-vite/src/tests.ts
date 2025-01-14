import register from '@playwright/ct-svelte/register';
import App from './App.svelte';
import ContactCard from './lib/ContactCard.svelte';
import Counter from './lib/Counter.svelte';

register({
  App,
  Counter,
  ContactCard
});
