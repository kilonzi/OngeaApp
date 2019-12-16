import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bulma/css/bulma.css";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
// Auth0 configuration
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "./auth";
//Firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import Peer from "peerjs";

//VUE USE
Vue.component("v-icon", Icon);
Vue.use(router);

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCjJ1RsWwvfd7uScoUhQk1vwAYV8hOwZuY",
  authDomain: "ongeaapp.firebaseapp.com",
  databaseURL: "https://ongeaapp.firebaseio.com",
  projectId: "ongeaapp",
  storageBucket: "ongeaapp.appspot.com",
  messagingSenderId: "556769714481",
  appId: "1:556769714481:web:f0aa91016c0375a90c5010",
  measurementId: "G-6LG2Q5657T"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
