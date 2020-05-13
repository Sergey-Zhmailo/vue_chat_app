import {
  firebaseLogin, firebaseLogout, firebaseResetPassword, firebaseSignUp,
} from '@/services/firebase/auth.service';
import mutations from '../mutations';

const { IS_LOGGED_IN, LOGIN_LOADER } = mutations;

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    loginInProgress: false,
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
  },
  mutations: {
    [IS_LOGGED_IN](state, boolean) {
      state.isLoggedIn = boolean;
    },
    [LOGIN_LOADER](state, boolean) {
      state.loginInProgress = boolean;
    },
  },
  actions: {
    setIsLoggedInState: {
      handler({ commit }, boolean) {
        commit(IS_LOGGED_IN, boolean);
      },
      root: true,
    },
    async login({ commit, dispatch }, { email, password }) {
      // context.commit - мутация по имени
      // context.dispatch - принимает названия экшенов, после одного можно выполнить другой
      // console.log(email, password);
      try {
        commit(LOGIN_LOADER, true);
        await firebaseLogin(email, password);
      } catch (error) {
        dispatch(
          'loadMessage',
          { type: 'error', message: error.message },
          { root: true },
        );
        console.log(error);
      } finally {
        commit(LOGIN_LOADER, false);
      }
    },
    async logout() {
      try {
        await firebaseLogout();
      } catch (error) {
        console.log(error);
      }
    },
    async resetPassword({ dispatch }, { email }) {
      try {
        await firebaseResetPassword(email);
        dispatch(
          'loadMessage',
          { type: 'success', message: `Email with instructions was send to ${email}` },
          { root: true },
        );
      } catch (error) {
        dispatch(
          'loadMessage',
          { type: 'error', message: error.message },
          { root: true },
        );
        console.log(error);
      }
    },
    async signUp({ commit, dispatch }, { email, password }) {
      try {
        commit(LOGIN_LOADER, true);
        await firebaseSignUp(email, password);
        dispatch(
          'loadMessage',
          { type: 'success', message: 'Register success' },
          { root: true },
        );
      } catch (error) {
        dispatch(
          'loadMessage',
          { type: 'error', message: error.message },
          { root: true },
        );
        console.log(error);
      } finally {
        commit(LOGIN_LOADER, false);
      }
    },
  },
};

export default authStore;
