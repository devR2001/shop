import HomePageVue from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import CreateProductPage from "@/pages/CreateProductPage.vue";
import ReadProductPage from "@/pages/ReadProductPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

import store from "../store";

const router = createRouter({
  //Optionen
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/home",
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
    {
      path: "/shop/create/product",
      component: CreateProductPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/shop/read/product/:id",
      name: "ReadProduct",
      component: ReadProductPage,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundPage,
      // redirect: "/",
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
