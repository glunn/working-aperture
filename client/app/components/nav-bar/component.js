import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend ({
  actions: {
    closeNavbar: function() {
      this.$('.collapse').collapse('hide');
    }
  }
});
