import Ember from 'ember';

export default Ember.Component.extend({

  button: 'Read More',
  default: '',
  left: '',

  actions: {
    toggle() {
      if (this.button === 'Read More') {
        this.set('button', 'Read Less');
        Ember.$('.fa-arrow-circle-o-down').addClass('fa-arrow-circle-o-up')
        .removeClass('fa-arrow-circle-o-down');
      } else {
        this.set('button', 'Read More');
        Ember.$('.fa-arrow-circle-o-up').addClass('fa-arrow-circle-o-down')
        .removeClass('fa-arrow-circle-o-up');
      }
    }
  }

});
