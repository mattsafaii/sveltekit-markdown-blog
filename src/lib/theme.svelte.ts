import { browser } from '$app/environment'

class Theme {
	current = $state(browser && localStorage.getItem('color-scheme'))

	toggle = () => {
		const theme = this.current === 'dark' ? 'light' : 'dark'
		document.documentElement.setAttribute('color-scheme', theme)
		localStorage.setItem('color-scheme', theme)
		this.current = theme
	}
}

export const theme = new Theme()

// Only run client-side code in the browser
if (browser) {
	const preference = window.matchMedia('(prefers-color-scheme: dark)')

	preference.addEventListener('change', (event) => {
		console.log(event.matches)
	})
}