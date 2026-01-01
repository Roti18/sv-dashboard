<script lang="ts">
	export let label: string = '';
	export let labelFor: string | undefined = undefined;
	export let error: string | undefined = undefined;
	export let hint: string | undefined = undefined;
	export let required: boolean = false;
</script>

<div class="mb-5 flex flex-col gap-1.5 transition-all">
	{#if label}
		<label
			class="text-muted flex items-center gap-1 text-[11px] font-bold tracking-widest uppercase"
			for={labelFor}
		>
			{label}
			{#if required}
				<span class="text-red-500">*</span>
			{/if}
		</label>
	{/if}

	<div class="relative">
		<slot />
	</div>

	{#if error}
		<p class="text-[10px] font-bold tracking-wider text-red-500/80 uppercase">{error}</p>
	{:else if hint}
		<p class="text-muted text-[10px] font-medium opacity-60">{hint}</p>
	{/if}
</div>
