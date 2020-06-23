import firebase from '@/firebase';
import store from '@/store';
import db from '@/db';
import router from '@/router';

/* eslint-disable no-debugger, no-console */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.user) {
      user = user.user;
    }
    const setUser = {
      name: user.displayName,
      id: user.uid,
      image: user.photoURL,
    };
    db.collection('users').doc(setUser.id).set(setUser);
    store.commit('auth/setUser', setUser);
    router.push('/dash');
  } else {
    store.commit('auth/setUser', null);
  }
});
