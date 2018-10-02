import Component from '@ember/component';

export default Component.extend ({
  actions: {
    closeNavbar: function() {
    //  this.toggleProperty('isShowingNavbar');
      $('.collapse').collapse('hide');
      // alert('DoubleClickableComponent was clicked!');
    }
  }
  //   // focusOut() {
  //   // alert('DoubleClickableComponent was clicked!');
  // }
});
