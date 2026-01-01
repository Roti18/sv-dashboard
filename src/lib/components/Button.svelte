<script lang="ts">
	let className = '';
	export { className as class };
	export let style = '';
	export let variant: 'primary' | 'secondary' | 'danger' = 'secondary';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled = false;
	export let loading = false;
</script>

<button
	{type}
	{disabled}
	class="sv-button variant-{variant} {className}"
	class:loading
	{style}
	on:click
>
	{#if loading}
		<span class="spinner"></span>
	{/if}
	<slot />
</button>

<style>
	.sv-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.625rem 1.25rem;
		border-radius: 0.5rem;
		font-weight: 600;
		font-size: 0.9375rem;
		cursor: pointer;
		transition: all 0.2s;
		border: 1px solid transparent;
		outline: none;
		user-select: none;
		white-space: nowrap;
	}

	.sv-button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.variant-primary {
		background-color: var(--sv-accent);
		color: white;
		box-shadow: 0 1px 2px 0 hsla(var(--sv-accent-raw), 0.2);
	}

	.variant-primary:hover:not(:disabled) {
		background-color: var(--sv-accent-hover);
		transform: translateY(-1px);
	}

	.variant-primary:active:not(:disabled) {
		transform: translateY(0);
	}

	.variant-secondary {
		background-color: var(--sv-surface);
		color: var(--sv-text);
		border-color: var(--sv-border);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.variant-secondary:hover:not(:disabled) {
		background-color: hsla(var(--sv-text-raw), 0.02);
		border-color: hsla(var(--sv-text-raw), 0.15);
	}

	.variant-danger {
		background-color: var(--sv-danger);
		color: white;
		box-shadow: 0 1px 2px 0 hsla(var(--sv-danger-raw), 0.2);
	}

	.variant-danger:hover:not(:disabled) {
		filter: brightness(1.05);
		transform: translateY(-1px);
	}

	.sv-button:focus-visible {
		box-shadow: 0 0 0 3px var(--sv-accent-faint);
	}

	.spinner {
		width: 1rem;
		height: 1rem;
		border: 2px solid currentColor;
		border-right-color: transparent;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
