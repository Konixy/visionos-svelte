<script lang="ts">
import { blur } from 'svelte/transition';
import { page } from '$app/state';

let { children } = $props();
</script>

<div class="flex w-full flex-row items-center justify-center">
	<div
		class="group absolute flex w-[52px] -translate-x-[450px] flex-col gap-2 rounded-[26px] bg-black/10 p-2 shadow-xl inset-shadow-sm shadow-black/30 inset-shadow-white/50 backdrop-blur-xl transition-all hover:w-auto [&>*]:transition-all [&>*]:outline-none"
	>
		<a
			href="/"
			class="flex flex-row items-center gap-2 rounded-full p-2 {page.url.pathname === '/'
				? 'bg-white/30'
				: 'hover:bg-white/20'}"
		>
			<img src="/icons/app-store.svg" alt="App Store Icon" class="size-5" />
			<span class="text-xs opacity-0 group-hover:opacity-100">Apps</span>
		</a>
		<a
			href="/"
			class="flex flex-row items-center gap-2 rounded-full p-2 {page.url.pathname === '/users'
				? 'bg-white/30'
				: 'hover:bg-white/20'}"
		>
			<img src="/icons/users.svg" alt="Users Icon" class="size-5" />
			<span class="text-xs opacity-0 group-hover:opacity-100">People</span>
		</a>
		<a
			href="/background"
			class="flex flex-row items-center gap-2 rounded-full p-2 {page.url.pathname === '/background'
				? 'bg-white/30'
				: 'hover:bg-white/20'}"
		>
			<img src="/icons/background.svg" alt="Background Icon" class="size-5" />
			<span class="text-xs opacity-0 group-hover:opacity-100">Environments</span>
		</a>
	</div>

	{@render children()}
</div>
