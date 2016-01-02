import Ember from 'ember';

export default Ember.Service.extend({

  columnState: {
    visible: false
  },

  displayMenuContent() {
    $('.show-menu').fadeOut(() => {
      $('.hide-menu').fadeIn();
      let parent = $('.menu').height();
      let child = $('.menu').find('.container').height();
      if (child >= parent) {
        let height = child + 50;
        $('.menu').css('height', height + 'px');
      }
    });
  },

  show() {
    Ember.$('html, body').animate({
      scrollTop: 0
    }, 700);
    $('.show-menu').css('position', 'relative');
    TweenLite.to($('.menu'), 0.8, {css: {'height': '460px'}, onComplete: () => {
      this.set('columnState.visible', true);
      this.displayMenuContent();
    }});
  },

  hide() {
    let animation = {
      opacity: 0,
      autoAlpha: 1
    };
    let delay = '-=0.45';
    $('.show-menu').css('position', 'fixed');
    new TimelineLite()
    .to('.navigation > li:nth-child(10)', 0.5, animation)
    .to('.navigation > li:nth-child(9)', 0.5, animation, delay)
    .to('.navigation > li:nth-child(8)', 0.5, animation, delay)
    .to('.navigation > li:nth-child(7)', 0.5, animation, delay)
    .to('.navigation > li:nth-child(6)', 0.5, animation, delay)
    .to('.navigation > li:nth-child(5)', 0.5, animation, delay)
    .to('.navigation > li:nth-child(4)', 0.5, animation, delay)
    .to('.navigation > li:nth-child(3)', 0.5, animation, delay)
    .to('.navigation > li:nth-child(2)', 0.5, animation, delay)
    .to('.navigation > li:nth-child(1)', 0.5, animation, delay)
    .to($('.menu'), 0.8, {css: {'height': '0px'},  onComplete: () => {
      this.set('columnState.visible', false);
      $('.hide-menu').fadeOut(() => {
        $('.show-menu').fadeIn();
      });
    }});
  },

  currentRouteDidChange() {
    if ($('.menu').height() > 0) {
      this.hide();
    }
  },

});
