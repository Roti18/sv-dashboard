<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	export let text = '';
	export let position: 'top' | 'right' | 'bottom' | 'left' = 'right';

	let visible = false;

	const positions = {
		right: 'left-[calc(100%+12px)] top-1/2 -translate-y-1/2 origin-left',
		left: 'right-[calc(100%+12px)] top-1/2 -translate-y-1/2 origin-right',
		top: 'bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 origin-bottom',
		bottom: 'top-[calc(100%+10px)] left-1/2 -translate-x-1/2 origin-top'
	};
</script>

<div
	class="relative flex h-full w-full items-center justify-center"
	on:mouseenter={() => (visible = true)}
	on:mouseleave={() => (visible = false)}
	on:focusin={() => (visible = true)}
	on:focusout={() => (visible = false)}
	role="tooltip"
>
	<slot />
	{#if visible && text}
		<div
			class="border-border bg-surface text-text pointer-events-none absolute z-[100] rounded-lg border px-2.5 py-1.5 text-[10px] font-bold tracking-widest whitespace-nowrap uppercase shadow-2xl backdrop-blur-md {positions[
				position
			]}"
			transition:scale={{ start: 0.9, duration: 150 }}
		>
			{text}
			{#if position === 'right'}
				<div
					class="border-border bg-surface absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-l"
				></div>
			{:else}
				<div
					class="border-border bg-surface absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-t border-l"
				></div>
			{/if}
		</div>
	{/if}
</div>
