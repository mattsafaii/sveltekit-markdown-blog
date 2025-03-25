<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props()
</script>

<svelte:head>
	<title>Posts in #{data.category} | {config.title}</title>
</svelte:head>

<section>
	<h1>Posts in <span class="category">#{data.category}</span></h1>
	
	{#if data.posts.length > 0}
		<ul class="posts">
			{#each data.posts as post}
				<li class="post">
					<a href="/{post.slug}" class="title">{post.title}</a>
					<p class="date">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="no-posts">No posts found in this category.</p>
	{/if}
</section>

<style>
	h1 {
		margin-bottom: var(--size-7);
		font-size: var(--font-size-fluid-3);
		
		.category {
			color: var(--brand);
		}
	}
	
	.no-posts {
		color: var(--text-2);
	}
	
	.posts {
		display: grid;
		gap: var(--size-7);

		.post {
			max-inline-size: var(--size-content-3);

			&:not(:last-child) {
				border-bottom: 1px solid var(--border);
				padding-bottom: var(--size-7);
			}

			.title {
				font-size: var(--font-size-fluid-2);
				text-transform: capitalize;
			}

			.date {
				color: var(--text-2);
			}

			.description {
				margin-top: var(--size-3);
			}
		}
	}
</style> 