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
  goToAcc() {
    console.log('yeeto');
    router.push('/account');
  },
};

export default {
  namespaced: true,
  actions,
};
