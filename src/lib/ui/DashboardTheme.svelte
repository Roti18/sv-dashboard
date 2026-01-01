<script lang="ts">
	import '../styles/theme.css';

	export let mode: 'light' | 'dark' = 'dark';

	$: if (typeof document !== 'undefined') {
		document.documentElement.setAttribute('data-theme', mode);
	}
</script>

<div class="sv-theme-wrapper">
	<slot />
</div>

<style>
	.sv-theme-wrapper {
		display: contents;
		color: var(--sv-text);
		background-color: var(--sv-base);
		font-family: var(--sv-font-sans);
	}
</style>
