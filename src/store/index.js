import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';

import auth from './auth';
import port from './port';
import navigation from './navigation';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    port,
    navigation,
  },
  mutations: vuexfireMutations,
});
