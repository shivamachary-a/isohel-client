import router from '@/router';

const actions = {

  goToDash() {
    router.push('/dash');
  },

  goToAnalysis() {
    router.push('/analysis');
  },
  goToPort() {
    console.log('yeeto');
    router.push('/port');
  },
};

export default {
  namespaced: true,
  actions,
};
