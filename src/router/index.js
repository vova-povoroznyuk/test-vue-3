import { createRouter, createWebHistory } from "vue-router";
import Authorization from "../pages/Authorization.vue";
import Game from "../pages/Game.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Authorization,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
