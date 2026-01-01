<script lang="ts">
	export let value: string = '';
	export let placeholder: string = '';
	export let rows: number = 3;
	export let disabled: boolean = false;
	export let error: string | undefined = undefined;
</script>

<textarea
	{placeholder}
	{rows}
	{disabled}
	class="sv-textarea"
	class:has-error={!!error}
	bind:value
	on:input
	on:change
	on:blur
	on:focus
></textarea>

<style>
	.sv-textarea {
		width: 100%;
		padding: 0.625rem 0.875rem;
		border-radius: 0.5rem;
		background-color: var(--sv-base);
		border: 1px solid var(--sv-border);
		color: var(--sv-text);
		font-size: 0.9375rem;
		transition: all 0.2s;
		outline: none;
		resize: vertical;
		min-height: 80px;
		box-sizing: border-box;
		font-family: inherit;
	}

	.sv-textarea:focus {
		border-color: var(--sv-accent);
		box-shadow: 0 0 0 3px var(--sv-accent-faint);
	}

	.sv-textarea:disabled {
		background-color: hsla(var(--sv-text-raw), 0.05);
		cursor: not-allowed;
		opacity: 0.7;
	}

	.has-error {
		border-color: var(--sv-danger);
	}

	.has-error:focus {
		box-shadow: 0 0 0 3px hsla(var(--sv-danger-raw), 0.1);
	}

	.sv-textarea::placeholder {
		color: var(--sv-muted);
		opacity: 0.5;
	}
</style>
