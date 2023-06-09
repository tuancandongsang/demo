import { createRouter, createWebHistory } from "vue-router";
import { appMainRouter } from "./module/appMain.js";

export const route = [
  ...appMainRouter,
  {
    path: "/login",
    component: () => import("../page/login/login.vue"),
  },
  {
    path: "/:notFound(.*)",
    component: () => import("../page/page-not-found/index.vue"),
    name: "NotFound",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: [...route],
});
