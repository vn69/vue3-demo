import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "./assets/main.css";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzoKOEa8bflhL2m-frgsVo6ZVkU3nnk7M",
  authDomain: "authen-93b06.firebaseapp.com",
  projectId: "authen-93b06",
  storageBucket: "authen-93b06.appspot.com",
  messagingSenderId: "1094971511515",
  appId: "1:1094971511515:web:a89b2c24867c2382ddf2fe",
};

// Initialize Firebase
initializeApp(firebaseConfig);

let app;

onAuthStateChanged(getAuth(), () => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(ElementPlus);

    app.mount("#app");
  }
});
