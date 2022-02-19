import { createApp, h } from 'vue'
import { createInertiaApp, InertiaLink } from '@inertiajs/inertia-vue3'


let customRoute = (...args) => {
  args[0] = args[0];
  let route =  window.reverseUrl(...args);
  return route;
}

const pages = {
    "Index": "Index.vue"
}

createInertiaApp({
  page: JSON.parse(document.getElementById("page").textContent),
  resolve: name => require(`./Pages/${pages[name]}`),
  setup({ el, app, props, plugin }) {
    const appVue = createApp({ render: () => h(app, props) })
      .use(plugin)
      .mixin({ methods: { route: customRoute }})
			.component('inertia-link', InertiaLink)
    
    appVue.mount(el)
  },
})