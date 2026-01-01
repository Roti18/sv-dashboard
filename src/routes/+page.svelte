<script lang="ts">
	import {
		DashboardTheme,
		DashboardLayout,
		Button,
		Card,
		Badge,
		Avatar,
		Dropdown,
		user,
		stats
	} from '$lib';
	import {
		ArrowUpRight,
		ArrowDownRight,
		Activity,
		Boxes,
		User,
		Settings,
		LogOut,
		ExternalLink,
		Bell
	} from '@lucide/svelte';

	let mode: 'dark' | 'light' = 'dark';
</script>

<DashboardTheme {mode}>
	<DashboardLayout bind:mode>
		<div slot="header-right" class="flex items-center gap-2 md:gap-4">
			<button
				class="text-muted hover:bg-surface/10 hover:text-text relative hidden h-10 w-10 items-center justify-center rounded-xl transition-all md:flex"
			>
				<Bell size={20} strokeWidth={1.5} />
				<span class="absolute top-3 right-3 flex h-2 w-2">
					<span
						class="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
					></span>
					<span class="bg-accent relative inline-flex h-2 w-2 rounded-full"></span>
				</span>
			</button>

			<Dropdown align="right">
				<div slot="trigger">
					<button
						class="border-border bg-surface/10 hover:border-border/60 hover:bg-surface/20 flex items-center gap-2 rounded-xl border p-1 pr-3 transition-all"
					>
						<Avatar src={user.avatar} fallback={user.name} size="sm" />
						<div class="hidden flex-col items-start px-1 md:flex">
							<span class="text-text/90 text-[10px] font-bold tracking-widest uppercase"
								>{user.name}</span
							>
							<span class="text-muted text-[9px] font-medium">Admin Access</span>
						</div>
					</button>
				</div>
				<div class="border-border bg-surface w-64 overflow-hidden rounded-xl border shadow-2xl">
					<div class="bg-surface/10 p-4">
						<div class="flex items-center gap-3">
							<Avatar src={user.avatar} fallback={user.name} size="md" />
							<div class="flex flex-col">
								<span class="text-text text-sm font-bold">{user.name}</span>
								<span class="text-muted text-xs">{user.email}</span>
							</div>
						</div>
					</div>
					<div class="p-2">
						<a
							href="/profile"
							class="group hover:bg-surface/10 hover:text-text text-muted flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all"
						>
							<User size={16} strokeWidth={1.5} />
							<span>View Profile</span>
							<ExternalLink
								size={12}
								class="ml-auto opacity-0 transition-opacity group-hover:opacity-100"
							/>
						</a>
						<a
							href="/settings"
							class="hover:bg-surface/10 hover:text-text text-muted flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all"
						>
							<Settings size={16} strokeWidth={1.5} />
							<span>Account Settings</span>
						</a>
						<div class="bg-border my-2 h-px"></div>
						<button
							class="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-500 transition-all hover:bg-red-500/10"
						>
							<LogOut size={16} strokeWidth={1.5} />
							<span>Sign Out</span>
						</button>
					</div>
				</div>
			</Dropdown>
		</div>

		<div class="mt-4 flex flex-col gap-8 pb-12">
			<div class="flex flex-col gap-1">
				<h1 class="text-text text-xl font-bold md:text-2xl">Overview</h1>
				<p class="text-muted text-xs">System orchestration status.</p>
			</div>

			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each stats as stat}
					<Card>
						<div class="flex flex-col gap-4">
							<div
								class="text-muted flex items-center justify-between text-[10px] font-bold tracking-widest uppercase"
							>
								{stat.label}
								<Activity size={12} class="opacity-30" />
							</div>
							<div class="flex items-end justify-between">
								<span class="text-text text-2xl font-bold">{stat.value}</span>
								<div
									class="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium {stat.trendType ===
									'up'
										? 'text-emerald-400'
										: 'text-rose-400'}"
								>
									{stat.trend}
								</div>
							</div>
						</div>
					</Card>
				{/each}
			</div>

			<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div class="lg:col-span-2">
					<Card padding="0">
						<div class="border-border flex items-center justify-between border-b p-4">
							<div
								class="text-text flex items-center gap-3 text-xs font-bold tracking-widest uppercase"
							>
								<Boxes size={16} class="text-accent" />
								Orchestration
							</div>
						</div>
						<div class="p-4">
							<div class="flex flex-col gap-4">
								<p class="text-muted text-xs leading-relaxed">
									Nodes processing telemetry data with <span class="text-text font-medium"
										>12ms latency</span
									>.
								</p>
								<div class="flex items-center gap-2">
									<Button size="sm">Logs</Button>
									<Button variant="ghost" size="sm">Nodes</Button>
								</div>
							</div>
						</div>
					</Card>
				</div>

				<div class="flex flex-col gap-6">
					<Card>
						<div
							slot="header"
							class="text-text flex items-center gap-3 text-xs font-bold tracking-widest uppercase"
						>
							<Activity size={16} class="text-emerald-500" />
							Streams
						</div>
						<div class="flex flex-col gap-4">
							{#each [1, 2] as i}
								<div class="flex items-center gap-3">
									<div class="h-2 w-2 rounded-full bg-emerald-500"></div>
									<div class="flex flex-col">
										<p class="text-text text-xs font-medium">Sync Complete</p>
										<span class="text-muted text-[10px]">T-minus {i * 12}m</span>
									</div>
								</div>
							{/each}
						</div>
					</Card>
				</div>
			</div>
		</div>
	</DashboardLayout>
</DashboardTheme>

<style>
	:global(html, body) {
		background-color: var(--sv-base);
		color: var(--sv-text);
	}
</style>
