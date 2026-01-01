<script lang="ts">
	import { Loader2 } from '@lucide/svelte';

	let className = '';
	export { className as class };
	export let variant: 'primary' | 'secondary' | 'ghost' | 'danger' = 'secondary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled = false;
	export let loading = false;

	const variants = {
		primary:
			'bg-accent text-white shadow-[0_0_15px_rgba(var(--sv-accent-raw),0.3)] hover:opacity-90 border-accent/20',
		secondary: 'bg-surface border-border text-muted hover:bg-surface/10 hover:text-text',
		ghost: 'bg-transparent text-muted hover:bg-surface/10 hover:text-text border-transparent',
		danger: 'bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500 hover:text-white'
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-xs',
		md: 'px-4 py-2 text-sm',
		lg: 'px-6 py-3 text-base'
	};
</script>

<button
	{type}
	{disabled}
	class="inline-flex items-center justify-center gap-2 rounded-xl border font-bold tracking-widest uppercase transition-all duration-200 outline-none active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 {variants[
		variant
	]} {sizes[size]} {className}"
	on:click
>
	{#if loading}
		<Loader2 class="animate-spin" size={16} />
	{/if}
	<slot />
</button>
