import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'drill-bits',
      title: 'Drill Bits',
      company: 'Milner',
      category: 'products'
    }, {
      id: 'sander',
      title: 'Sander',
      company: 'Milner',
      category: 'products' 
    }]
  }
});
