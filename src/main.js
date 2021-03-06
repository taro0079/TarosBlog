// Import main css
import '~/assets/style/index.scss'
import '~/assets/style/style.css'
import 'katex/dist/katex.min.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.google.com/specimen/Open+Sans?category=Serif,Sans+Serif'
	})
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
