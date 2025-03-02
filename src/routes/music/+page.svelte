<script>
import {
	Clock,
	DiscAlbum,
	Ellipsis,
	Grid2x2,
	ListMusic,
	Mic,
	MicVocalIcon,
	Music2Icon,
	PlayCircle,
	Radio,
	Search,
	TvMinimalPlay,
	UserSquare
} from 'lucide-svelte';
</script>

<div
	class="mr-4 flex flex-col gap-2 rounded-full bg-black/10 p-2 shadow-xl inset-shadow-sm shadow-black/30 inset-shadow-white/50 backdrop-blur-xl [&>*]:transition-colors"
>
	<div class="rounded-full p-2 hover:bg-white/20"><PlayCircle class="size-4" /></div>
	<div class="rounded-full p-2 hover:bg-white/20"><Grid2x2 class="size-4" /></div>
	<div class="rounded-full p-2 hover:bg-white/20"><TvMinimalPlay class="size-4" /></div>
	<div class="rounded-full p-2 hover:bg-white/20"><Radio class="size-4" /></div>
	<div class="rounded-full p-2 hover:bg-white/20"><ListMusic class="size-4" /></div>
	<div class="rounded-full p-2 hover:bg-white/20"><Search class="size-4" /></div>
</div>

<div
	class="flex flex-row rounded-4xl shadow-xl inset-shadow-sm shadow-black/30 inset-shadow-white/50 backdrop-blur-xl"
>
	<div class="flex flex-col gap-4 rounded-l-4xl bg-black/40 p-6">
		<div class="flex flex-row justify-between">
			<div class="flex flex-col">
				<div class="font text-2xl font-medium">Library</div>
				<div class="text-foreground/60 text-sm">All Music</div>
			</div>
			<div>
				<div class="rounded-full bg-white/10 p-1"><Ellipsis class="size-5" /></div>
			</div>
		</div>
		<div
			class="[&>*]:hover:bg-foreground/10 flex flex-col gap-2 text-sm [&>*]:flex [&>*]:items-center [&>*]:gap-4 [&>*]:rounded-lg [&>*]:p-2 [&>*]:transition-colors"
		>
			<button><Clock class="text-foreground/60 size-4" /> Recently Added</button>
			<button><MicVocalIcon class="text-foreground/60 size-4" /> Artists</button>
			<button><DiscAlbum class="text-foreground/60 size-4" /> Albums</button>
			<button><Music2Icon class="text-foreground/60 size-4" /> Songs</button>
			<button><UserSquare class="text-foreground/60 size-4" /> Made For You</button>
		</div>
	</div>
	<div class="rounded-r-4xl bg-black/5 px-10 py-6">
		<div class="flex flex-col">
			<div class="text-xl font-medium">Playlists</div>
			<div class="text-sm font-light">254 Playlists</div>
		</div>
		<div class="ml-3 flex flex-row items-center">
			<Mic class="text-foreground/80 -mr-8 size-5" />
			<input
				type="text"
				class="placeholder:text-foreground/80 rounded-xl bg-black/20 py-2 pr-4 pl-10 font-light inset-shadow-[inset_0_2px_3px_rgba(0,0,0,0.25)] inset-shadow-black/50 outline-none"
				placeholder="Search Playlists"
			/>
		</div>
	</div>
</div>
