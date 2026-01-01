<script lang="ts">
	let className = '';
	export { className as class };
	export let style = '';
	export let padding: string = '1.5rem';
</script>

<div class="sv-card {className}" {style} style:--sv-card-padding={padding}>
	{#if $$slots.header}
		<div class="sv-card-header">
			<slot name="header" />
		</div>
	{/if}

	<div class="sv-card-body">
		<slot />
	</div>

	{#if $$slots.footer}
		<div class="sv-card-footer">
			<slot name="footer" />
		</div>
	{/if}
</div>

<style>
	.sv-card {
		background-color: var(--sv-surface);
		border: 1px solid var(--sv-border);
		border-radius: 0.75rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		box-shadow: var(--sv-shadow);
	}

	.sv-card-header {
		padding: var(--sv-card-padding);
		border-bottom: 1px solid var(--sv-border);
		font-weight: 600;
		font-size: 1rem;
		color: var(--sv-text);
	}

	.sv-card-body {
		padding: var(--sv-card-padding);
		flex: 1;
	}

	.sv-card-footer {
		padding: var(--sv-card-padding);
		border-top: 1px solid var(--sv-border);
		background-color: hsla(var(--sv-text-raw), 0.015);
	}
</style>
