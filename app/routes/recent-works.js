import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'drill-bits',
      title: 'Drill Bits',
      company: 'Milner',
      category: 'products',
      photo: '/img/bottle-on-white.jpg'
    }, 
    {
      id: 'sander',
      title: 'Sander',
      company: 'Milner',
      category: 'products',
      photo: '/img/bottle-background.jpg'
    },
    {
      id: 'widget',
      title: 'Widget',
      company: 'Coner',
      category: 'products',
      photo: '/img/bottle-on-white.jpg'
    },
    {
      id: 'screw',
      title: 'Screw',
      company: 'Taned',
      category: 'products',
      photo: '/img/bottle-on-white.jpg'
    },
    {
      id: 'widget-2',
      title: 'Another Widget',
      company: 'Something',
      category: 'products',
      photo: '/img/bottle-background.jpg'
    }]
  }
});
