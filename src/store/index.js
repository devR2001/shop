import { createStore } from "vuex";
import { FIREBASE_API_KEY } from "../config/firebase";
import axios from "axios";

const store = createStore({
  state: {
    userId: null,
    token: null,
  },
  mutations: {
    setUser(state, payload) {
      state.userId = payload.userId;
      state.token = payload.token;
    },
  },
  actions: {
    auth(context, payload) {
      let url = "";
      if (payload.mode === "signin") {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
      } else if (payload.mode === "signup") {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
      } else {
        return;
      }
      const authDO = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      };
      return axios
        .post(url, authDO)
        .then((response) => {
          // console.log(response);
          context.commit("setUser", {
            userId: response.data.localId,
            token: response.data.idToken,
          });
        })
        .catch((error) => {
          // console.log({ error });
          const errorMessage = new Error(
            error.response.data.error.message || "UNKNOWN_ERROR"
          );
          throw errorMessage;
        });
    },
    signup(context, payload) {
      const signupDO = {
        ...payload,
        mode: "signup",
      };
      return context.dispatch("auth", signupDO);
    },
    signin(context, payload) {
      const signinDO = {
        ...payload,
        mode: "signin",
      };
      return context.dispatch("auth", signinDO);
    },
  },
  getters: {},
});

export default store;
