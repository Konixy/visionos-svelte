<script lang="ts">
import '../app.css';
import { background } from '$lib/background';

let { children } = $props();
</script>

<div class="fixed -z-10 h-screen w-full scale-110 brightness-60">
	<enhanced:img
		class="h-full w-full object-cover"
		src={$background || '/bg.jpg'}
		alt="Background"
	/>
</div>

<div class="flex h-screen w-full items-center justify-center not-lg:hidden">
	{@render children()}
</div>

<div class="flex h-screen w-full items-center justify-center lg:hidden">
	<div class="flex flex-col items-center justify-center gap-4">
		<h1 class="text-2xl font-black">Welcome to VisionOS</h1>
		<p class="text-center text-gray-400">You can't view this app on mobile.</p>
	</div>
</div>
