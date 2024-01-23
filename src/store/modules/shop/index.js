import axios from "axios";

const state = {
  products: [],
};
const mutations = {
  addProduct(state, payload) {
    state.products.push(payload);
  },
};
const actions = {
  storeProduct(context, payload) {
    const productItem = {
      title: payload.title,
      description: payload.description,
      price: payload.price,
    };
    axios
      .post(
        "https://vue-3-shop-backend-542b4-default-rtdb.europe-west1.firebasedatabase.app/products.json",
        productItem
      )
      .then(() => {})
      .catch((error) => {
        throw new Error(error);
      });
  },
};
const getters = {};

const shopModule = {
  state,
  mutations,
  actions,
  getters,
};

export default shopModule;
