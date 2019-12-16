import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Connect from "../views/Connect.vue";
import Login from "../views/Login.vue";
import firebase from "firebase/app";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/connect",
    name: "connect",
    component: Connect
    // meta: {
    //   requiresAuth: true
    // }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router;
