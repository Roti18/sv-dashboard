<script lang="ts">
	export let value: any = undefined;
	export let disabled: boolean = false;
	export let error: string | undefined = undefined;
	export let options: { label: string; value: any }[] = [];
</script>

<div class="sv-select-wrapper" class:disabled class:has-error={!!error}>
	<select {disabled} class="sv-select" bind:value on:change on:blur on:focus>
		<slot>
			{#each options as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</slot>
	</select>
	<div class="sv-select-icon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
		>
	</div>
</div>

<style>
	.sv-select-wrapper {
		position: relative;
		width: 100%;
	}

	.sv-select {
		appearance: none;
		width: 100%;
		padding: 0.625rem 2.5rem 0.625rem 0.875rem;
		border-radius: 0.5rem;
		background-color: var(--sv-base);
		border: 1px solid var(--sv-border);
		color: var(--sv-text);
		font-size: 0.9375rem;
		transition: all 0.2s;
		outline: none;
		cursor: pointer;
		box-sizing: border-box;
	}

	.sv-select:focus {
		border-color: var(--sv-accent);
		box-shadow: 0 0 0 3px var(--sv-accent-faint);
	}

	.sv-select-icon {
		position: absolute;
		right: 0.75rem;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none;
		color: var(--sv-muted);
		display: flex;
		align-items: center;
	}

	.disabled .sv-select {
		background-color: hsla(var(--sv-text-raw), 0.05);
		cursor: not-allowed;
		opacity: 0.7;
	}

	.has-error .sv-select {
		border-color: var(--sv-danger);
	}

	.has-error .sv-select:focus {
		box-shadow: 0 0 0 3px hsla(var(--sv-danger-raw), 0.1);
	}
</style>
