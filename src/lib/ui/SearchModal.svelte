<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { Search, X, History, Zap, Command } from '@lucide/svelte';
	import { onMount } from 'svelte';

	export let open = false;

	let searchInput: HTMLInputElement;

	$: if (open && searchInput) {
		setTimeout(() => searchInput.focus(), 50);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') open = false;
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

{#if open}
	<div
		class="fixed inset-0 z-[100] flex justify-center bg-black/60 p-4 pt-[15vh] backdrop-blur-xl transition-all"
		transition:fade={{ duration: 200 }}
		on:click={() => (open = false)}
	>
		<div
			class="border-border bg-surface/90 relative flex h-fit w-full max-w-2xl flex-col overflow-hidden rounded-2xl border shadow-2xl shadow-black/50"
			transition:scale={{ start: 0.95, duration: 200 }}
			on:click|stopPropagation
		>
			<div class="border-border flex items-center gap-4 border-b p-4 md:p-5">
				<Search size={22} class="text-accent" strokeWidth={2.5} />
				<input
					bind:this={searchInput}
					type="text"
					placeholder="Search actions, files, or teammates..."
					class="text-text placeholder-muted flex-1 bg-transparent text-lg outline-none"
				/>
				<div class="flex items-center gap-2">
					<div
						class="border-border bg-surface/10 text-muted hidden items-center gap-1 rounded-md border px-2 py-1 text-[10px] font-bold md:flex"
					>
						<Command size={10} /> K
					</div>
					<button
						class="text-muted hover:bg-surface/10 hover:text-text flex items-center justify-center rounded-lg p-2 transition-colors"
						on:click={() => (open = false)}
					>
						<X size={18} />
					</button>
				</div>
			</div>

			<div class="custom-scrollbar max-h-[60vh] overflow-y-auto p-4 md:p-6">
				<div class="mb-8">
					<div
						class="text-muted mb-4 flex items-center gap-2 px-2 text-[10px] font-bold tracking-widest uppercase"
					>
						<History size={12} />
						RECENT SEARCHES
					</div>
					<div class="grid gap-1">
						{#each ['Infrastructure Dashboard', 'Deployment Log #024', 'User Authentication API'] as item}
							<button
								class="group text-muted hover:bg-surface/10 hover:text-text flex items-center gap-3 rounded-xl p-3 text-left text-sm transition-all"
							>
								<div
									class="group-hover:bg-accent h-1.5 w-1.5 rounded-full bg-slate-700 transition-colors"
								></div>
								{item}
							</button>
						{/each}
					</div>
				</div>

				<div>
					<div
						class="text-muted mb-4 flex items-center gap-2 px-2 text-[10px] font-bold tracking-widest uppercase"
					>
						<Zap size={12} class="text-yellow-500" />
						QUICK ACTIONS
					</div>
					<div class="grid gap-2 sm:grid-cols-2">
						{#each [{ label: 'Create New Project', icon: 'plus' }, { label: 'Invite Teammate', icon: 'user' }, { label: 'System Settings', icon: 'settings' }, { label: 'Help & Docs', icon: 'help' }] as action}
							<button
								class="border-border bg-surface text-muted hover:border-accent/30 hover:bg-accent/5 hover:text-accent flex items-center gap-3 rounded-xl border px-4 py-4 text-left text-sm transition-all"
							>
								<div class="bg-surface/10 flex h-8 w-8 items-center justify-center rounded-lg">
									<Command size={14} />
								</div>
								{action.label}
							</button>
						{/each}
					</div>
				</div>
			</div>

			<div
				class="border-border text-muted flex items-center gap-6 border-t bg-black/20 p-4 px-6 text-[10px] font-medium"
			>
				<div class="flex items-center gap-1.5">
					<kbd class="border-border bg-surface/20 rounded border px-1.5 py-0.5 font-sans">↵</kbd>
					to select
				</div>
				<div class="flex items-center gap-1.5">
					<kbd class="border-border bg-surface/20 rounded border px-1.5 py-0.5 font-sans">↑↓</kbd>
					to navigate
				</div>
				<div class="flex items-center gap-1.5">
					<kbd class="border-border bg-surface/20 rounded border px-1.5 py-0.5 font-sans">ESC</kbd>
					to close
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.custom-scrollbar::-webkit-scrollbar {
		width: 4px;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 10px;
	}
	.custom-scrollbar:hover::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.1);
	}
</style>
