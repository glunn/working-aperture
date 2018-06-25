import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'drill-bits',
      title: 'Vionnet Pochette Bag',
      company: 'Milner',
      category: 'products',
      photo: '/img/Vionnet-Pochette-Bag.jpg'
    }, 
    {
      id: 'sander',
      title: 'Sander',
      company: 'Milner',
      category: 'products',
      photo: '/img/Chloe-Clutch.jpg'
    },
    {
      id: 'widget',
      title: 'Widget',
      company: 'Coner',
      category: 'products',
      photo: '/img/Lanvin-Clutch.jpg'
    },
    {
      id: 'drill-bits',
      title: 'Vionnet Pochette Bag',
      company: 'Milner',
      category: 'products',
      photo: '/img/Vionnet-Pochette-Bag.jpg'
    }, 
    {
      id: 'sander',
      title: 'Sander',
      company: 'Milner',
      category: 'products',
      photo: '/img/Chloe-Clutch.jpg'
    },
    {
      id: 'screw',
      title: 'Screw',
      company: 'Taned',
      category: 'products',
      photo: '/img/Inflatable-portable-lounger-sm.jpg'
    },
    {
      id: 'screw',
      title: 'Screw',
      company: 'Taned',
      category: 'products',
      photo: '/img/ritualist-banner.jpg'
    },
    {
      id: 'widget-2',
      title: 'Another Widget',
      company: 'Something',
      category: 'products',
      photo: '/img/Shakshuka-display-md.jpg'
    }]
  }
});
