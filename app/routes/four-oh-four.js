import Ember from 'ember';

export default Ember.Route.extend({

  redirect(model, transition) {
    transition.abort();
    this.transitionTo('about');
  }

});
