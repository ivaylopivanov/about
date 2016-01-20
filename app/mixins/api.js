import Ember from 'ember';
import config from '../config/environment';

export default Ember.Mixin.create({

  host: function() {
    if (config.environment === 'development') {
      return 'http://localhost:3333';
    }
    return 'http://188.166.97.106:3333';
  }.property(),

});
