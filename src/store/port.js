import Vuex from 'vuex';
import { firestoreAction } from 'vuexfire';
import db from '@/db';

export default {
  namespaced: true,
  state: {
    portfolio: [],
  },
  actions: {
    bindPortfolios: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('portfolio', db.collection('portfolios'));
    }),
  },
};
