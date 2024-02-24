import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/newpage',
      name: '新增頁面',
      component: () => import('../views/NewPage.vue'),
      children: [
        {
          path: 'a',
          component: () => import('../views/ComponentA.vue'),
        },
        {
          path: 'b',
          component: () => import('../views/ComponentB.vue'),
        },
        {
          path: 'dynamic-router/:id',
          component: () => import('../views/DynamicRouter.vue'),
        },
        {
          path: 'dynamic-router-by-props/:id',
          component: () => import('../views/DynamicRouterByProps.vue'),
          props: (route) => ({ id: route.params.id }),
        },
        {
          path: 'named-view',
          component: () => import('../views/NamedView.vue'),
          children: [
            {
              path: 'a2c',
              components: {
                left: () => import('../views/ComponentA.vue'),
                right: () => import('../views/ComponentC.vue'),
              },
            },
            {
              path: 'c2b',
              components: {
                left: () => import('../views/ComponentC.vue'),
                right: () => import('../views/ComponentB.vue'),
              },
            },
          ],
        },
        {
          path: 'router-navigation',
          component: () => import('../views/RouterNavigation.vue'),
        },
      ],
    },
  ],
});

export default router;
