<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let open = false;
	export let align: 'left' | 'right' = 'right';

	let className = '';
	export { className as class };

	let container: HTMLElement;

	function handleClickOutside(event: MouseEvent) {
		if (open && container && !container.contains(event.target as Node)) {
			open = false;
		}
	}

	onMount(() => {
		window.addEventListener('click', handleClickOutside);
		return () => window.removeEventListener('click', handleClickOutside);
	});
</script>

<div class="relative inline-block" bind:this={container}>
	<button
		type="button"
		class="block cursor-pointer border-none bg-none p-0 outline-none"
		on:click={() => (open = !open)}
		aria-haspopup="true"
		aria-expanded={open}
	>
		<slot name="trigger" />
	</button>

	{#if open}
		<div
			class="border-border bg-surface absolute top-[calc(100%+8px)] z-50 min-w-[200px] overflow-hidden rounded-xl border p-1.5 shadow-2xl shadow-black/40 {align ===
			'left'
				? 'left-0'
				: 'right-0'} {className}"
			in:scale={{ start: 0.95, duration: 150 }}
			out:fade={{ duration: 100 }}
		>
			<slot />
		</div>
	{/if}
</div>

<style>
	:global(.sv-dropdown-item) {
		display: flex;
		align-items: center;
		padding: 8px 12px;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--sv-muted);
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.2s;
		text-decoration: none;
		border: none;
		background: transparent;
		width: 100%;
		text-align: left;
	}

	:global(.sv-dropdown-item:hover) {
		background-color: hsla(0, 0%, 100%, 0.05);
		color: var(--sv-text);
	}

	:global(.sv-dropdown-divider) {
		height: 1px;
		background-color: var(--sv-border);
		margin: 4px -6px;
	}
</style>
