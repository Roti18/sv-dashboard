<script lang="ts">
	export let id: string | undefined = undefined;
	export let value: string | number = '';
	export let type = 'text';
	export let placeholder = '';
	export let disabled = false;
	export let error: string | undefined = undefined;

	let className = '';
	export { className as class };
</script>

<div class="w-full {className}">
	<input
		{id}
		{type}
		{placeholder}
		{disabled}
		class="border-border bg-surface text-text placeholder-muted focus:border-accent/50 focus:bg-surface/20 focus:ring-accent/50 w-full rounded-xl border px-4 py-2.5 text-sm transition-all outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50
        {error ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30' : ''}"
		bind:value
		on:input
		on:change
		on:blur
		on:focus
	/>
</div>
