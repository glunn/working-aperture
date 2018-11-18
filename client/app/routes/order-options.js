import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const user1 = this.store.findRecord('user', 1);
  
    return [{
      user1
    }]
  }
});
