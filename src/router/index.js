import HomePageVue from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import { createRouter, createWebHistory } from "vue-router";

import store from "../store";

const router = createRouter({
  //Optionen
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePageVue,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuthenticated) {
          next("/shop");
        } else {
          next();
        }
      },
    },
    {
      path: "/shop",
      component: ShopPage,
      meta: {
        requiresAuth: true,
      },
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
