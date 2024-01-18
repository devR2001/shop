import HomePageVue from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  //Optionen
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePageVue,
    },
    {
      path: "/shop",
      component: ShopPage,
    },
  ],
});

export default router;
