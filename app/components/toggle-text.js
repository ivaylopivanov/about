import Ember from 'ember';

export default Ember.Component.extend({

  button: 'Read More',
  default: '',
  left: '',

  actions: {
    toggle() {
      if (this.button === 'Read More') {
        this.set('button', 'Read Less');
      } else {
        this.set('button', 'Read More');
      }
    }
  }

});
