import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    document.onkeydown = (e) => {
      let type = '';
      if (Ember.$('.pswp--open').length) return;
      if (e.keyCode === 37) {
        type = 'prev';
      } else if (e.keyCode === 39) {
        type = 'next';
      }
      this.sendAction('transition', type);
    }
  }

});
