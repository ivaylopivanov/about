import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    let settings = {
      right: 100,
      autoAlpha: 0
    };
    let delay = '-=0.15';
    new TimelineLite()
    .from('.navigation > li:nth-child(1)', 0.3, settings)
    .from('.navigation > li:nth-child(2)', 0.3, settings, delay)
    .from('.navigation > li:nth-child(3)', 0.3, settings, delay)
    .from('.navigation > li:nth-child(4)', 0.3, settings, delay)
    .from('.navigation > li:nth-child(5)', 0.3, settings, delay)
    .from('.navigation > li:nth-child(6)', 0.3, settings, delay)
    .from('.navigation > li:nth-child(7)', 0.3, settings, delay)
    .from('.navigation > li:nth-child(8)', 0.3, settings, delay)
    .from('.navigation > li:nth-child(9)', 0.3, settings, delay)
    .from('.navigation > li:nth-child(10)', 0.3, settings, delay);
  }

});
