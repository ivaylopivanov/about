import Ember from 'ember';
import makeId from '../mixins/make-id';

export default Ember.Component.extend(makeId, {

  type: 'quote',
  delay: '+=0',
  quote: '',
  from: '',

  didInsertElement() {
  }

});