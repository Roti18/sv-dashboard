<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import Topbar from './Topbar.svelte';
</script>

<div class="sv-layout">
	<slot name="sidebar">
		<!-- Default empty sidebar or placeholder could go here if needed -->
	</slot>

	<main class="sv-main">
		<slot name="topbar">
			<!-- Topbar slot -->
		</slot>

		<div class="sv-content">
			<slot />
		</div>
	</main>
</div>

<style>
	.sv-layout {
		display: flex;
		min-height: 100vh;
		background-color: var(--sv-base);
		color: var(--sv-text);
	}

	.sv-main {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.sv-content {
		padding: 2rem;
		flex: 1;
	}

	@media (max-width: 768px) {
		:global(.sv-sidebar) {
			display: none; /* Mobile layout should be handled with a drawer later */
		}
	}
</style>
