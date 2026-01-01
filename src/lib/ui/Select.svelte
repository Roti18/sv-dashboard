<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	export let value: any = undefined;
	export let disabled: boolean = false;
	export let error: string | undefined = undefined;
	export let options: { label: string; value: any }[] = [];

	let className = '';
	export { className as class };
</script>

<div class="relative w-full {className}">
	<select
		{disabled}
		class="border-border bg-surface text-text focus:border-accent/50 focus:bg-surface/20 focus:ring-accent/50 w-full cursor-pointer appearance-none rounded-xl border px-4 py-2.5 text-sm transition-all outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50
        {error ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30' : ''}"
		bind:value
		on:change
		on:blur
		on:focus
	>
		<slot>
			{#each options as option}
				<option value={option.value} class="underline-none bg-surface text-text"
					>{option.label}</option
				>
			{/each}
		</slot>
	</select>
	<div
		class="text-muted pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 transition-colors"
	>
		<ChevronDown size={14} strokeWidth={2.5} />
	</div>
</div>
