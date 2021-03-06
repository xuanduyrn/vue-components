import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

//Global
import theme from "./modules/theme";
import members from "./modules/member-global";
import gettersGlobal from "./modules/getters-global";

//import modules
import tickets from "./modules/tickets";
import timeline from "./modules/timeline";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  mutations: {
    cleanUpPageData() {
      for (var key in this._mutations) {
        if (key.endsWith("/cleanUpPageData")) {
          this.commit(key);
        }
      }
    }
  },
  modules: {
    // Global
    theme,
    members,
    gettersGlobal,
    // Component
    tickets,
    timeline
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
