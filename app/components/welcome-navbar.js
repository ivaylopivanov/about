import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    getStarted() {
      new TimelineLite()
      .to('nav', 1, {'opacity': 0})
      .to('nav', 0.1, {'display': 'none'});
      Ember.$('.container-full').css('display', 'block');
      new TimelineLite().to('#cookie-bar', 1, {'opacity': 1}, 'delay+=1');
    }
  }

});