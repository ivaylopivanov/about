import Ember from 'ember';

export default Ember.Component.extend({

  onScroll() {
    let top = Ember.$(window).scrollTop();
    this.toTop(top);
  },

  toTop(top) {
    let scrollTrigger = 100;
    if (top > scrollTrigger) {
      Ember.$('#back-to-top').addClass('show');
    } else {
      Ember.$('#back-to-top').removeClass('show');
    }
  },

  didInsertElement() {
    Ember.$(window).on('scroll', () => { this.onScroll(); });
  }

});
