<script lang="ts">
	export let label: string = '';
	export let labelFor: string | undefined = undefined;
	export let error: string | undefined = undefined;
	export let hint: string | undefined = undefined;
	export let required: boolean = false;
</script>

<div class="sv-form-field">
	{#if label}
		<label class="sv-label" for={labelFor}>
			{label}
			{#if required}
				<span class="required">*</span>
			{/if}
		</label>
	{/if}

	<div class="sv-control">
		<slot />
	</div>

	{#if error}
		<p class="sv-error">{error}</p>
	{:else if hint}
		<p class="sv-hint">{hint}</p>
	{/if}
</div>

<style>
	.sv-form-field {
		margin-bottom: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	.sv-label {
		display: block;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--sv-text);
	}

	.required {
		color: var(--sv-danger);
		margin-left: 0.125rem;
	}

	.sv-error {
		font-size: 0.75rem;
		color: var(--sv-danger);
		margin: 0;
	}

	.sv-hint {
		font-size: 0.75rem;
		color: var(--sv-muted);
		margin: 0;
	}
</style>
