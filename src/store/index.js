import Vue from 'vue'
import Vuex from 'vuex'
import LangStore from "./modules/lang_store";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        lang: LangStore
    }
})