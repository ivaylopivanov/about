import Ember from 'ember';

export default Ember.Component.extend({

  delay: '+=0',
  text: '',

  didInsertElement() {
    let tl = new TimelineLite;
    let chars = this.splitText(this.text);
    tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, this.get('delay'));
  },

  splitText(phrase, container) {
    let sentence = phrase.split('');
    $.each(sentence, (index, val) => {
      if (val === ' ') {
        val = '&nbsp;';
      }
      $('<div/>', { id : 'animated-txt' + index }).addClass('animated-txt')
      .html(val).appendTo('.animate-text-container');
    });
    return $('.animated-txt');
  }

});
