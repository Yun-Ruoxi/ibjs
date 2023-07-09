const home: AuthRoute.Route = {
  name: 'home',
  path: '/home',
  component: 'basic',
  meta: { title: 'home', icon: 'mdi:menu' },
  children: [
    { name: 'home_fifth', path: '/home/fifth', component: 'self', meta: { title: 'home_fifth', icon: 'mdi:menu' } },
    {
      name: 'home_first-page',
      path: '/home/first-page',
      component: 'self',
      meta: { title: 'home_first-page', icon: 'mdi:menu' }
    },
    { name: 'home_four', path: '/home/four', component: 'self', meta: { title: 'home_four', icon: 'mdi:menu' } },
    {
      name: 'home_multi',
      path: '/home/multi',
      component: 'multi',
      meta: { title: 'home_multi', icon: 'mdi:menu' },
      children: [
        {
          name: 'home_multi_first',
          path: '/home/multi/first',
          component: 'self',
          meta: { title: 'home_multi_first', icon: 'mdi:menu' }
        },
        {
          name: 'home_multi_second',
          path: '/home/multi/second',
          component: 'self',
          meta: { title: 'home_multi_second', icon: 'mdi:menu' }
        },
        {
          name: 'home_multi_third',
          path: '/home/multi/third',
          component: 'multi',
          meta: { title: 'home_multi_third', icon: 'mdi:menu' },
          children: [
            {
              name: 'home_multi_third_third-child1',
              path: '/home/multi/third/third-child1',
              component: 'self',
              meta: { title: 'home_multi_third_third-child1', icon: 'mdi:menu' }
            },
            {
              name: 'home_multi_third_third-child2',
              path: '/home/multi/third/third-child2',
              component: 'self',
              meta: { title: 'home_multi_third_third-child2', icon: 'mdi:menu' }
            }
          ]
        }
      ]
    },
    {
      name: 'home_second-page',
      path: '/home/second-page',
      component: 'self',
      meta: { title: 'home_second-page', icon: 'mdi:menu' }
    },
    { name: 'home_third', path: '/home/third', component: 'self', meta: { title: 'home_third', icon: 'mdi:menu' } }
  ]
};

export default home;
