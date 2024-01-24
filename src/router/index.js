// import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import CreateProductPage from "@/pages/CreateProductPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

import store from "../store";

const router = createRouter({
  //Optionen
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/home",
      component: () =>
        import(
          /*webpackChunkName: 'component-homepage' */ "@/pages/HomePage.vue"
        ),
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
      component: () =>
        import(/*webpackChunkName: 'group-shop' */ "@/pages/ShopPage.vue"),
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
      component: import(
        /*webpackChunkName: 'group-shop' */ "@/pages/ReadProductPage.vue"
      ),
      props: true,
      meta: {
        requiresAuth: true,
        enterTransition: "rubberBand",
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
