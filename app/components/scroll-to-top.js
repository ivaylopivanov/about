import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    backToTop() {
      Ember.$('html, body').animate({
        scrollTop: 0
      }, 700);
    },
  }
});