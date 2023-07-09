const one: AuthRoute.Route = {
  name: 'one',
  path: '/one',
  component: 'basic',
  meta: { title: 'one', icon: 'mdi:menu' },
  children: [
    {
      name: 'one_two',
      path: '/one/two',
      component: 'multi',
      meta: { title: 'one_two', icon: 'mdi:menu' },
      children: [
        {
          name: 'one_two_three-1',
          path: '/one/two/three-1',
          component: 'self',
          meta: { title: 'one_two_three-1', icon: 'mdi:menu' }
        },
        {
          name: 'one_two_three-ano',
          path: '/one/two/three-ano',
          component: 'self',
          meta: { title: 'one_two_three-ano', icon: 'mdi:menu' }
        }
      ]
    }
  ]
};

export default one;
