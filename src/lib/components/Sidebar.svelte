<script lang="ts">
	let className = '';
	export { className as class };
	export let style: string = '';
</script>

<aside class="sv-sidebar {className}" {style}>
	<div class="sv-sidebar-header">
		<slot name="header" />
	</div>
	<nav class="sv-sidebar-nav">
		<slot />
	</nav>
	<div class="sv-sidebar-footer">
		<slot name="footer" />
	</div>
</aside>

<style>
	.sv-sidebar {
		width: 260px;
		height: 100vh;
		background-color: var(--sv-base);
		border-right: 1px solid var(--sv-border);
		display: flex;
		flex-direction: column;
		position: sticky;
		top: 0;
	}

	.sv-sidebar-header {
		padding: 1.5rem;
		/* Remove bottom border for a cleaner look */
	}

	.sv-sidebar-nav {
		flex: 1;
		padding: 0.75rem;
		overflow-y: auto;
	}

	.sv-sidebar-footer {
		padding: 1rem;
		border-top: 1px solid var(--sv-border);
	}

	/* Style for items within Sidebar */
	:global(.sv-sidebar-item) {
		display: flex;
		align-items: center;
		padding: 0.625rem 0.875rem;
		border-radius: 0.5rem;
		text-decoration: none;
		color: var(--sv-muted);
		font-weight: 500;
		font-size: 0.875rem;
		transition: all 0.2s;
		margin-bottom: 0.125rem;
		cursor: pointer;
		position: relative;
	}

	:global(.sv-sidebar-item:hover) {
		background-color: hsla(var(--sv-text-raw), 0.04);
		color: var(--sv-text);
	}

	:global(.sv-sidebar-item.active) {
		background-color: var(--sv-accent-faint);
		color: var(--sv-accent);
		font-weight: 600;
	}

	/* Subtle indicator line */
	:global(.sv-sidebar-item.active::before) {
		content: '';
		position: absolute;
		left: -0.75rem; /* Match nav padding */
		top: 0.625rem;
		bottom: 0.625rem;
		width: 3px;
		background-color: var(--sv-accent);
		border-radius: 0 4px 4px 0;
	}
</style>
