import { writable } from 'svelte/store';

export const navigation = writable({ previousUrl: '/' });
