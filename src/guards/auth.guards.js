import router from '@/router';

export default function authGuards(store) {
  // const isAuth = false;
  const authRoutes = ['Login', 'Reset', 'SignUp'];
  router.beforeEach((to, from, next) => {
    if (authRoutes.includes(to.name) && store.state.authStore.isLoggedIn) {
      return next({ name: 'Home' });
    }
    if (!authRoutes.includes((to.name)) && !store.state.authStore.isLoggedIn) {
      return next({ name: 'Login' });
    }
    return next();
  });
}
