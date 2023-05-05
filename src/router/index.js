import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/AboutPage.vue"),
    },
  ],
});

export default router;
