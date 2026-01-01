<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import { ChevronDown, ChevronLeft, ChevronRight, Sun, Moon } from '@lucide/svelte';
	import Tooltip from '../ui/Tooltip.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let items: any[] = [];
	export let collapsed = true;
	export let mobileOpen = false;
	export let mode: 'dark' | 'light' = 'dark';

	let activeMenu: string | null = null;

	function toggleMenu(title: string) {
		if (collapsed) return;
		activeMenu = activeMenu === title ? null : title;
	}

	function handleItemClick(item: any) {
		if (item.children) {
			toggleMenu(item.title);
		}
	}
</script>

{#if mobileOpen}
	<button
		type="button"
		class="fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity md:hidden"
		transition:fade={{ duration: 250 }}
		on:click={() => (mobileOpen = false)}
		aria-label="Close sidebar"
	></button>
{/if}

<aside
	class="border-border bg-surface fixed inset-y-0 left-0 z-50 flex flex-col border-r transition-all duration-300 ease-in-out md:sticky md:top-0
    {collapsed ? 'w-[70px]' : 'w-[260px]'}
    {mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}"
>
	<div class="border-border bg-surface/10 flex h-16 items-center overflow-hidden border-b px-4">
		<div class="flex w-full items-center">
			<slot name="header" />
		</div>
	</div>

	<nav class="custom-scrollbar flex-1 space-y-1 overflow-x-hidden overflow-y-auto p-3">
		{#each items as item}
			<div class="group relative">
				{#if item.children}
					<Tooltip text={collapsed ? item.title : ''} position="right">
						<button
							type="button"
							class="text-muted hover:bg-surface/10 hover:text-text flex w-full items-center gap-3 rounded-xl p-2.5 transition-all
                            {activeMenu === item.title
								? 'bg-surface/10 text-accent font-semibold shadow-inner'
								: ''}"
							on:click={() => handleItemClick(item)}
						>
							<div
								class="flex h-6 w-6 shrink-0 items-center justify-center transition-transform group-hover:scale-110"
							>
								<svelte:component
									this={item.icon}
									size={20}
									strokeWidth={activeMenu === item.title ? 2 : 1.5}
								/>
							</div>
							{#if !collapsed}
								<span class="flex-1 text-left text-sm">{item.title}</span>
								<ChevronDown
									size={14}
									class="transition-transform duration-300 {activeMenu === item.title
										? 'rotate-180 text-blue-400'
										: 'opacity-40'}"
								/>
							{/if}
							{#if collapsed && item.active}
								<div
									class="absolute top-1/2 right-1.5 h-1.5 w-1.5 -translate-y-1/2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
								></div>
							{/if}
						</button>
					</Tooltip>

					{#if activeMenu === item.title && !collapsed}
						<div
							class="border-border mt-1 ml-5 space-y-1 border-l pl-4"
							transition:slide={{ duration: 250 }}
						>
							{#each item.children as child}
								<a
									href={child.href}
									class="hover:text-text block rounded-md py-1.5 text-xs text-slate-500 transition-all
                                    {child.active ? 'font-bold text-blue-400' : ''}"
								>
									{child.title}
								</a>
							{/each}
						</div>
					{/if}
				{:else}
					<Tooltip text={collapsed ? item.title : ''} position="right">
						<a
							href={item.href}
							class="text-muted hover:bg-surface/10 hover:text-text flex w-full items-center gap-3 rounded-xl p-2.5 transition-all
                            {item.active
								? 'bg-accent/10 text-accent font-semibold shadow-[inset_0_0_10px_rgba(var(--sv-accent-raw),0.05)]'
								: ''}"
						>
							<div
								class="flex h-6 w-6 shrink-0 items-center justify-center transition-transform group-hover:scale-110"
							>
								<svelte:component this={item.icon} size={20} strokeWidth={item.active ? 2 : 1.5} />
							</div>
							{#if !collapsed}
								<span class="text-sm">{item.title}</span>
							{/if}
							{#if collapsed && item.active}
								<div
									class="absolute top-1/2 right-1.5 h-1.5 w-1.5 -translate-y-1/2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
								></div>
							{/if}
						</a>
					</Tooltip>
				{/if}
			</div>
		{/each}
	</nav>

	<div class="border-border mt-auto space-y-1 border-t p-3">
		<button
			type="button"
			class="text-muted hover:bg-surface/20 hover:text-text group/arrow relative flex h-10 w-full items-center gap-3 rounded-xl px-2 transition-all"
			on:click={() => (collapsed = !collapsed)}
		>
			<div
				class="bg-accent/10 text-accent flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-transform group-hover/arrow:scale-110"
			>
				{#if collapsed}
					<ChevronRight size={16} strokeWidth={2} />
				{:else}
					<ChevronLeft size={16} strokeWidth={2} />
				{/if}
			</div>
			{#if !collapsed}
				<span class="text-xs font-medium">Collapse</span>
			{/if}
		</button>

		<button
			type="button"
			class="text-muted hover:bg-surface/20 hover:text-text group flex h-10 w-full items-center gap-3 rounded-xl px-2 transition-all"
			on:click={() => dispatch('toggleTheme')}
		>
			<div
				class="flex h-6 w-6 shrink-0 items-center justify-center transition-all group-hover:rotate-12"
			>
				{#if mode === 'dark'}
					<Sun size={16} strokeWidth={2} />
				{:else}
					<Moon size={16} strokeWidth={2} />
				{/if}
			</div>
			{#if !collapsed}
				<span class="text-xs font-medium">Appearance</span>
			{/if}
		</button>
		<slot name="footer" />
	</div>
</aside>

<style>
	.custom-scrollbar::-webkit-scrollbar {
		width: 3px;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.03);
		border-radius: 10px;
	}
	.custom-scrollbar:hover::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.08);
	}
</style>
