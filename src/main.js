import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/css/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "@router";
import i18n from "./i18n"; 

const app = createApp(App);
const pinia = createPinia();


import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

library.add(fas, fab, far);
dom.watch();

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(i18n); 
app.use(pinia);
app.use(router);
app.mount("#app");
