// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/sweetalert2";
import "./plugins/fontawesome";
import "./plugins/moment";
import "./plugins/axios";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
