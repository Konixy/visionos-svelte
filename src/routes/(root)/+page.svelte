<script lang="ts">
import { blur, fade } from 'svelte/transition';
import * as AppIcons from '$lib/app-icons';
import { calculateInDelay, calculateOutDelay } from '$lib/utils';

const apps = [
	{
		name: 'TV',
		icon: AppIcons.TV
	},
	{
		name: 'Music',
		icon: AppIcons.Music
	},
	{
		name: 'Mindfulness',
		icon: AppIcons.Mindfulness
	},
	{
		name: 'Settings',
		icon: AppIcons.Settings
	},
	{
		name: 'Freeform',
		icon: AppIcons.Freeform
	},
	{
		name: 'Safari',
		icon: AppIcons.Safari
	},
	{
		name: 'Photos',
		icon: AppIcons.Photos
	},
	{
		name: 'Notes',
		icon: AppIcons.Notes
	},
	{
		name: 'App Store',
		icon: AppIcons.AppStore
	},
	{
		name: 'Mail',
		icon: AppIcons.Mail
	},
	{
		name: 'Messages',
		icon: AppIcons.Messages
	},
	{
		name: 'Keynote',
		icon: AppIcons.Keynote
	},
	{
		name: 'Compatible Apps',
		icon: AppIcons.CompatibleApps
	}
];
</script>

<div class="absolute mx-26 flex flex-col items-center justify-center gap-10">
	<div class="flex flex-row gap-20">
		{#each apps.slice(0, 4) as a, i}
			{@render app(a, i, true)}
		{/each}
	</div>
	<div class="flex flex-row gap-20">
		{#each apps.slice(4, 9) as a, i}
			{@render app(a, i, false)}
		{/each}
	</div>
	<div class="flex flex-row gap-20">
		{#each apps.slice(9, 13) as a, i}
			{@render app(a, i, true)}
		{/each}
	</div>
</div>

{#snippet app(app: (typeof apps)[number], i: number, even: boolean)}
	<div
		class="group flex flex-col items-center gap-2 transition-all hover:scale-110"
		in:fade|global={calculateInDelay(i, even)}
		out:fade|global={calculateOutDelay(i, even, true)}
	>
		<svelte:component this={app.icon} class="size-20" />
		<div class="text-xs">{app.name}</div>
	</div>
{/snippet}
