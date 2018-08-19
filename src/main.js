import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import ApiService from "@/core/services/api.service";

Vue.config.productionTip = false;

ApiService.init();
ApiService.setHeader();

export const EventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
