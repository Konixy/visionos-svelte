<script lang="ts">
import { calculateInDelay, calculateOutDelay } from '$lib/utils';
import { fade } from 'svelte/transition';
import { backgrounds, setBackground } from '$lib/background';
</script>

<div class="absolute mx-26 flex flex-col items-center justify-center gap-6">
	<div class="flex flex-row">
		{#each backgrounds.slice(0, 4) as bg, i}
			{@render background(bg, i, true)}
		{/each}
	</div>
	<div class="flex flex-row">
		{#each backgrounds.slice(4, 9) as bg, i}
			{@render background(bg, i, false)}
		{/each}
	</div>
	<div class="flex flex-row">
		{#each backgrounds.slice(9, 13) as bg, i}
			{@render background(bg, i, true)}
		{/each}
	</div>
</div>

{#snippet background(bg: (typeof backgrounds)[number], i: number, even: boolean)}
	<button
		class="group my-2 flex flex-col items-center gap-2 transition-all hover:m-0 [&>*]:transition-all"
		in:fade|global={calculateInDelay(i, even)}
		out:fade|global={calculateOutDelay(i, even, true)}
		onclick={() => setBackground(bg.url)}
	>
		<enhanced:img
			src={bg.url || '/bg.jpg'}
			alt="Background"
			class="mx-10 size-20 rounded-full object-cover brightness-60 group-hover:m-0 group-hover:h-24 group-hover:w-40 group-hover:brightness-100 group-hover:drop-shadow-lg group-active:translate-1 group-active:scale-95"
		/>
		<div class="text-xs font-medium text-neutral-300 drop-shadow-md group-hover:text-white">
			{bg.name}
		</div>
	</button>
{/snippet}
