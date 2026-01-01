<script lang="ts">
	export let variant: 'neutral' | 'accent' | 'success' | 'danger' | 'warning' | 'secondary' =
		'neutral';
	let className = '';
	export { className as class };

	const variants = {
		neutral: 'bg-surface/20 text-muted border-border',
		accent:
			'bg-accent/10 text-accent border-accent/20 shadow-[0_0_10px_rgba(var(--sv-accent-raw),0.1)]',
		secondary: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
		success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
		warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
		danger: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
	};
</script>

<span
	class="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-black tracking-widest uppercase transition-all {variants[
		variant
	]} {className}"
>
	<slot />
</span>
