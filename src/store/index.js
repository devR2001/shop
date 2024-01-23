import { createStore } from "vuex";
import authModule from "./modules/auth";
import shopModule from "./modules/shop";

const store = createStore({
  modules: {
    auth: authModule,
    shop: shopModule,
  },
});

export default store;
