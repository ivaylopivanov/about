import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    let animation = {
      right: 100,
      autoAlpha: 0
    };
    let delay = '-=0.45';
    new TimelineLite()
    .from("li:nth-child(1)", 0.5, animation)
    .from("li:nth-child(2)", 0.5, animation, delay)
    .from("li:nth-child(3)", 0.5, animation, delay)
    .from("li:nth-child(4)", 0.5, animation, delay)
    .from("li:nth-child(5)", 0.5, animation, delay)
    .from("li:nth-child(6)", 0.5, animation, delay)
    .from("li:nth-child(7)", 0.5, animation, delay)
    .from("li:nth-child(8)", 0.5, animation, delay)
    .from("li:nth-child(9)", 0.5, animation, delay)
    .from("li:nth-child(10)", 0.5, animation, delay);
  }

});