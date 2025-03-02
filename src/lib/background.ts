import { writable } from 'svelte/store';

export const backgrounds = [
	{
		name: 'Mount Hood',
		url: '/backgrounds/mount-hood.webp'
	},
	{
		name: 'Background 1',
		url: 'https://picsum.photos/seed/1/300/200'
	},
	{
		name: 'Background 2',
		url: 'https://picsum.photos/seed/2/300/200'
	},
	{
		name: 'Background 3',
		url: 'https://picsum.photos/seed/3/300/200'
	},
	{
		name: 'Background 4',
		url: 'https://picsum.photos/seed/4/300/200'
	},
	{
		name: 'Background 5',
		url: 'https://picsum.photos/seed/5/300/200'
	},
	{
		name: 'Background 6',
		url: 'https://picsum.photos/seed/6/300/200'
	},
	{
		name: 'Background 7',
		url: 'https://picsum.photos/seed/7/300/200'
	},
	{
		name: 'Background 8',
		url: 'https://picsum.photos/seed/8/300/200'
	},
	{
		name: 'Background 9',
		url: 'https://picsum.photos/seed/9/300/200'
	},
	{
		name: 'Background 10',
		url: 'https://picsum.photos/seed/10/300/200'
	},
	{
		name: 'Background 11',
		url: 'https://picsum.photos/seed/11/300/200'
	},
	{
		name: 'Background 12',
		url: 'https://picsum.photos/seed/12/300/200'
	}
];

export const background = writable(
	typeof window !== 'undefined'
		? (exists(localStorage.getItem('background')) ?? backgrounds[0].url)
		: backgrounds[0].url
);

function exists(url?: string | null) {
	return backgrounds.find((b) => b.url === url)?.name || backgrounds[0].url;
}

export function setBackground(url: string) {
	if (!exists(url)) return;

	background.set(url);
	localStorage.setItem('background', url);
}
