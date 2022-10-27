import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Movies from "./views/Movies.vue";
import App from "./App.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/movies", component: Movies },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
