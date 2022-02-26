import { createStore } from "vuex";
import coinStore from "./coinStore";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    coinStore
  },
  plugins: [createPersistedState()]
});
