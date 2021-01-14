import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import Login from "../views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "index",
      path: "/",
      component: HelloWorld,
    },
    {
      name: "Login",
      path: "/login",
      component: Login,
    },
  ],
});
