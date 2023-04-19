import { createRouter, createWebHistory } from "vue-router";
import { appMainRouter } from "./module/appMain.js";

export const route = [
  {
    path: "/login",
    component: () => import("../page/login/index.vue"),
  },
  {
    path: "/:notFound(.*)",
    component: () => import("../page/page-not-found/index.vue"),
    name: "NotFound",
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: [...appMainRouter,...route],
});

