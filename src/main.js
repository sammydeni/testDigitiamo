import './assets/main.css'

import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faSearch)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
