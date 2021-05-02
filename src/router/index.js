import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/main/Index'),
    children: [
      {
        path: '/',
        component: () => import('@/views/main/Home'),
      },
      {
        path: '/login',
        component: () => import('@/views/main/Login'),
      },
      {
        path: '/register',
        component: () => import('@/views/main/Register'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/views/dashboard/Index'),
    children: [
      // Dashboard
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/dashboard/Dashboard'),
      },
      // Pages
      {
        name: 'User Profile',
        path: 'pages/user',
        component: () => import('@/views/dashboard/pages/UserProfile'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;