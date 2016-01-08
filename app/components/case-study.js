import Ember from 'ember';

export default Ember.Component.extend({

  sliderEnabled: true,
  project: '',

  didInsertElement() {

      $('#slides').superslides();
  },

  actions: {
    showImages() {
      this.set('sliderEnabled', true);
    },
    closeImages() {
      this.set('sliderEnabled', false);
      $('#slides').superslides('destroy');
    }
  }

});