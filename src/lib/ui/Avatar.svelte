<script lang="ts">
	export let src: string | undefined = undefined;
	export let alt: string = 'User Avatar';
	export let fallback: string = '';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	let className = '';
	export { className as class };

	$: initials = fallback ? fallback.substring(0, 2).toUpperCase() : '';

	const sizes = {
		xs: 'h-6 w-6 text-[8px]',
		sm: 'h-8 w-8 text-[10px]',
		md: 'h-10 w-10 text-xs',
		lg: 'h-12 w-12 text-sm',
		xl: 'h-16 w-16 text-base'
	};
</script>

<div
	class="border-border bg-surface/20 text-muted inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl border font-bold tracking-widest uppercase shadow-inner {sizes[
		size
	]} {className}"
>
	{#if src}
		<img {src} {alt} class="h-full w-full object-cover" on:error={() => (src = undefined)} />
	{:else}
		<span class="opacity-80">{initials}</span>
	{/if}
</div>
