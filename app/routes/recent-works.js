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
      photo: '/img/bottle-background.jpg'
    },
    {
      id: 'screw',
      title: 'Screw',
      company: 'Taned',
      category: 'products',
      photo: '/img/bottle-background.jpg'
    }]
  }
});
