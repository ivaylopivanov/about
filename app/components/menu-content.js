import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    new TimelineLite().to('.navigation', 1, {'opacity': 1});
  }

});
