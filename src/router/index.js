// import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import NotFoundPage from "@/pages/NotFoundPage.vue";

import routes from "./routes";
import store from "../store";

const router = createRouter({
  //Optionen
  history: createWebHistory(),
  routes: [
    ...routes,
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundPage,
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
