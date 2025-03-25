<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
	import { theme } from '$lib/theme.svelte'
</script>

<button on:click={theme.toggle} aria-label="Toggle theme" class="theme-toggle-btn">
	{#if theme.current === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun size={18} />
			<span>Light Mode</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon size={18} />
			<span>Dark Mode</span>
		</div>
	{/if}
</button>

<style>
	.theme-toggle-btn {
		padding: var(--size-2) var(--size-3);
		font-weight: 500;
		font-size: var(--font-size-1);
		background: var(--surface-2);
		border: 1px solid var(--border);
		border-radius: var(--radius-3);
		box-shadow: none;
		overflow: hidden;
		transition: all 0.2s ease;
		color: var(--text-2);

		> * {
			display: flex;
			align-items: center;
			gap: var(--size-2);
		}
	}

	.theme-toggle-btn:hover {
		background: var(--surface-3);
		color: var(--text-1);
	}
</style>