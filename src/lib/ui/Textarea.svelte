<script lang="ts">
	export let value: string = '';
	export let placeholder: string = '';
	export let rows: number = 3;
	export let disabled: boolean = false;
	export let error: string | undefined = undefined;

	let className = '';
	export { className as class };
</script>

<div class="w-full {className}">
	<textarea
		{placeholder}
		{rows}
		{disabled}
		class="border-border bg-surface text-text placeholder-muted focus:border-accent/50 focus:bg-surface/20 focus:ring-accent/50 min-h-[100px] w-full resize-y rounded-xl border px-4 py-2.5 text-sm transition-all outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50
        {error ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30' : ''}"
		bind:value
		on:input
		on:change
		on:blur
		on:focus
	></textarea>
</div>
