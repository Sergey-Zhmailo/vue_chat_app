import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '@/plugins/firebase';
import router from '@/router';
// tmp
// import { firebaseLogout } from '../services/firebase/auth.service';
import authStore from './modules/auth';
import notifyStore from './modules/notify';
import userStore from './modules/user';
import authGuards from '../guards/auth.guards';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authStore,
    notifyStore,
    userStore,
  },
});

// console.log(store);

firebase.auth().onAuthStateChanged((user) => {
  console.log('onAuthStateChanged ', user);
  store.dispatch('setIsLoggedInState', Boolean(user));
  store.dispatch('setUserState', user);

  if (user) {
    router.push({ name: 'Home' });
  }
});

authGuards(store);

// firebaseLogin('sergey.seoz@gmail.com', '415263')
//   .then(() => {
//     console.log('login success');
//   })
//   .catch((error) => {
//     console.log('Login error', error);
//   });
// firebaseLogout();
export default store;
