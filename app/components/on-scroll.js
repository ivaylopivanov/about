import Ember from 'ember';

export default Ember.Component.extend({
  onScroll() {
    let top = Ember.$(window).scrollTop();
    this.toTop(top);
    this.sticky(top);
  },
  toTop(top) {
    let scrollTrigger = 100;
    if (top > scrollTrigger) {
      Ember.$('#back-to-top').addClass('show');
    } else {
      Ember.$('#back-to-top').removeClass('show');
    }
  },
  sticky(top) {
    let offsetTop = $('#sticky-anchor').offset().top;
    if (top >= offsetTop && window.innerWidth > 1000) {
        $('#sticky').addClass('sticky');
    } else {
        $('#sticky').removeClass('sticky');
    }
  },
  didInsertElement() {
    Ember.$(window).on('scroll', () => { this.onScroll(); });
  }
});