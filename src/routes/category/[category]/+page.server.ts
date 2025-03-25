import type { Post, Categories } from '$lib/types'

export async function load({ fetch, params }) {
	const { category } = params
	const response = await fetch('/api/posts')
	const allPosts: Post[] = await response.json()
	
	// Filter posts by the category parameter
	const posts = allPosts.filter(post => 
		post.categories.includes(category as Categories)
	)
	
	return { 
		posts,
		category
	}
} 