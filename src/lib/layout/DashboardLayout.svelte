<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import Header from './Header.svelte';
	import SearchModal from '../ui/SearchModal.svelte';
	import { navigation } from '../data/mock';

	export let collapsed = true;
	export let mode: 'dark' | 'light' = 'dark';

	let mobileOpen = false;
	let searchOpen = false;

	function toggleTheme() {
		mode = mode === 'dark' ? 'light' : 'dark';
	}
</script>

<div class="bg-base text-text flex min-h-screen">
	<Sidebar items={navigation} bind:collapsed bind:mobileOpen {mode} on:toggleTheme={toggleTheme}>
		<div slot="header" class="flex items-center gap-3 overflow-hidden transition-all duration-300">
			<div
				class="bg-accent shadow-accent/20 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-lg font-bold text-white shadow-lg"
			>
				S
			</div>
			{#if !collapsed}
				<span class="text-text font-bold tracking-tight whitespace-nowrap">SV</span>
			{/if}
		</div>
	</Sidebar>

	<main class="flex min-w-0 flex-1 flex-col">
		<Header bind:collapsed bind:mobileOpen on:openSearch={() => (searchOpen = true)}>
			<slot name="header-right" slot="right" />
		</Header>

		<div class="mx-auto w-full max-w-[1400px] flex-1 p-6 md:p-8">
			<slot />
		</div>
	</main>

	<SearchModal bind:open={searchOpen} />
</div>
