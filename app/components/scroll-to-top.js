import Ember from 'ember';

export default Ember.Component.extend({
  showElement() {
    let scrollTrigger = 100;
    let scrollTop = Ember.$(window).scrollTop();
    if (scrollTop > scrollTrigger) {
      Ember.$('#back-to-top').addClass('show');
    } else {
      Ember.$('#back-to-top').removeClass('show');
    }
  },
  didInsertElement() {
    Ember.$(window).on('scroll', () => { this.showElement(); });
  },
  actions: {
    backToTop() {
      Ember.$('html, body').animate({
        scrollTop: 0
      }, 700);
    }
  }
});