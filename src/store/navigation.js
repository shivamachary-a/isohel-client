import Vue from 'vue';
import Vuex from 'vuex';

import router from '@/router';

const actions = {

  goToDash() {
    router.push('/dash');
  },

  goToAnalysis() {
    router.push('/analysis');
  },
  goToPort() {
    router.push('/port');
  },
};

export default {
  actions,
};
