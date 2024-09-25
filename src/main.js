import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/css/style.css'

import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@router'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
      en: {
        recette: {
            create: {
                titre: 'Add New Recipe'
              }
        }
      },
      fr: {
        recette: {
            create: {
                titre: 'Ajouter une Nouvelle Recette'
              }
        }
      }
    }
})

const app = createApp(App)
const pinia = createPinia()

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();



app.component("font-awesome-icon", FontAwesomeIcon);

app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')
