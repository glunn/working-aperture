import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  model() {
    return this.store.createRecord('thing');
  },
  actions: {
    async createUser() {
      const user = get(this, 'user');

      await user.save();
    }
  }
});
