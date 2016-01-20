import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    document.onkeydown = (e) => {
      let type = '';
      if (e.keyCode === 37) {
        type = 'prev';
      } else if (e.keyCode === 39) {
        type = 'next';
      }
      this.sendAction('transition', type);
    }
  }

});
