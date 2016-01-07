import Ember from 'ember';
import makeId from '../mixins/make-id';

export default Ember.Component.extend(makeId, {

  type: 'quote',
  delay: '+=0',
  quote: '',
  from: '',

  didInsertElement() {
    let tl = new TimelineMax();
    let text = $('#' + this.get('id'));
    tl.fromTo(text, 0, {}, {scale: 0.0}, 0);
    tl.fromTo(text, 1, {}, {scale: 1}, this.get('delay'));
  }

});