import Ember from 'ember';

export default Ember.Component.extend({

  onScroll() {
    let top = Ember.$(window).scrollTop();
    this.fadeContent();
    this.toTop(top);
  },

  fadeContent() {
    $('.fade-in').each(function() {
      let objectBottom = $(this).offset().top + 100;
      let windowBottom = $(window).scrollTop() + $(window).height();
      console.log(windowBottom, objectBottom);
      if( windowBottom >= objectBottom) {
        $(this).animate({'opacity':'1'}, 500);
      }
    });
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
