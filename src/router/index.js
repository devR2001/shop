import HomePageVue from "@/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  //Optionen
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePageVue,
    },
  ],
});

export default router;
