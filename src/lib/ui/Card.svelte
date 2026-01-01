<script lang="ts">
	let className = '';
	export { className as class };
	export let padding: string = 'p-5';
</script>

<div
	class="border-border bg-surface hover:border-accent/20 flex flex-col overflow-hidden rounded-2xl border shadow-lg backdrop-blur-sm transition-all {className}"
>
	{#if $$slots.header}
		<div
			class="border-border bg-surface/10 text-text/90 border-b px-5 py-3 text-xs font-bold tracking-widest uppercase"
		>
			<slot name="header" />
		</div>
	{/if}

	<div class="flex-1 {padding}">
		<slot />
	</div>

	{#if $$slots.footer}
		<div class="border-border bg-surface/10 border-t px-5 py-3">
			<slot name="footer" />
		</div>
	{/if}
</div>
