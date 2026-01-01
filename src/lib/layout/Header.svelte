<script lang="ts">
	import { Menu, Search } from '@lucide/svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let mobileOpen = false;
	export let collapsed = true;
</script>

<header
	class="border-border bg-base sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b px-4 md:px-6"
>
	<div class="flex flex-1 items-center gap-3">
		<button
			type="button"
			class="text-muted hover:bg-surface/10 hover:text-text hidden items-center justify-center rounded-lg p-2 transition-colors md:flex lg:hidden"
			on:click={() => (collapsed = !collapsed)}
		>
			<Menu size={20} strokeWidth={1.5} />
		</button>

		<button
			type="button"
			class="text-muted hover:bg-surface/10 hover:text-text flex items-center justify-center rounded-lg p-2 transition-colors md:hidden"
			on:click={() => (mobileOpen = !mobileOpen)}
		>
			<Menu size={20} strokeWidth={1.5} />
		</button>

		<slot name="left" />
	</div>

	<div class="hidden max-w-md flex-[2] justify-center md:flex">
		<button
			class="border-border bg-surface/10 text-muted hover:border-border/60 hover:bg-surface/20 flex w-full items-center gap-3 rounded-lg border px-3 py-1.5 text-sm transition-all"
			on:click={() => dispatch('openSearch')}
		>
			<Search size={16} strokeWidth={1.5} />
			<span class="flex-1 text-left">Search anything...</span>
			<div class="flex gap-1 opacity-50">
				<kbd class="border-border bg-surface/20 rounded border px-1.5 py-0.5 font-sans text-[10px]"
					>⌘</kbd
				>
				<kbd class="border-border bg-surface/20 rounded border px-1.5 py-0.5 font-sans text-[10px]"
					>K</kbd
				>
			</div>
		</button>
	</div>

	<div class="flex flex-1 items-center justify-end gap-2 md:gap-3">
		<button
			class="text-muted hover:bg-surface/10 hover:text-text flex items-center justify-center rounded-lg p-2 transition-colors md:hidden"
			on:click={() => dispatch('openSearch')}
		>
			<Search size={20} strokeWidth={1.5} />
		</button>
		<slot name="right" />
	</div>
</header>
