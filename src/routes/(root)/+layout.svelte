<script lang="ts">
import { blur } from 'svelte/transition';
import { page } from '$app/state';

let { children } = $props();
</script>

<div class="flex w-full flex-row items-center justify-center">
	<div
		class="absolute flex -translate-x-[450px] flex-col gap-2 rounded-full bg-black/10 p-2 shadow-xl inset-shadow-sm shadow-black/30 inset-shadow-white/50 backdrop-blur-xl [&>*]:transition-colors"
	>
		<a
			href="/"
			class="rounded-full p-2 {page.url.pathname === '/' ? 'bg-white/30' : 'hover:bg-white/20'}"
		>
			<img src="/icons/app-store.svg" alt="App Store Icon" class="size-5" />
		</a>
		<a
			href="/"
			class="rounded-full p-2 {page.url.pathname === '/users'
				? 'bg-white/30'
				: 'hover:bg-white/20'}"
		>
			<img src="/icons/users.svg" alt="Users Icon" class="size-5" />
		</a>
		<a
			href="/background"
			class="rounded-full p-2 {page.url.pathname === '/background'
				? 'bg-white/30'
				: 'hover:bg-white/20'}"
		>
			<img src="/icons/background.svg" alt="Background Icon" class="size-5" />
		</a>
	</div>

	{@render children()}
</div>
