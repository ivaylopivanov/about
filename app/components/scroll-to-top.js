import Ember from 'ember';

export default Ember.Component.extend({
  showElement() {
    let scrollTrigger = 100;
    let scrollTop = this.$(window).scrollTop();
    if (scrollTop > scrollTrigger) {
      this.$('#back-to-top').addClass('show');
    } else {
      this.$('#back-to-top').removeClass('show');
    }
  },
  didInsertElement() {
    $(window).on('scroll', () => { this.showElement(); });
  },
  actions: {
    backToTop() {
      $('html, body').animate({
        scrollTop: 0
      }, 700);
    }
  }
});