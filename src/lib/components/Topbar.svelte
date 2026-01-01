<script lang="ts">
</script>

<header class="sv-topbar">
	<div class="sv-topbar-left">
		<slot name="left" />
	</div>
	<div class="sv-topbar-right">
		<slot name="right" />
	</div>
</header>

<style>
	.sv-topbar {
		height: 64px;
		background-color: var(--sv-base);
		border-bottom: 1px solid var(--sv-border);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1.5rem;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.sv-topbar-left, .sv-topbar-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
