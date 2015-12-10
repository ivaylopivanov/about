import Ember from 'ember';

export default Ember.Component.extend({
  showElement() {
    let scrollTrigger = 100;
    let top = Ember.$(window).scrollTop();
    let offsetTop = $('#sticky-anchor').offset().top;
    if (top > scrollTrigger) {
      Ember.$('#back-to-top').addClass('show');
    } else {
      Ember.$('#back-to-top').removeClass('show');
    }
    if (top >= offsetTop) {
        $('#sticky').addClass('sticky');
    } else {
        $('#sticky').removeClass('sticky');
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