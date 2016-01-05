import Ember from 'ember';

export default Ember.Component.extend({

  word: '',
  id: '',

  init: function() {
    this._super();
    this.set('id', Math.floor((Math.random() * 100) + 1) + 'lettering')
  },

  didInsertElement() {
    $('#' + this.get('id')).lettering().children('span').wrap('<span />')
    .parent().prepend('<span></span><span></span><span></span>');
  }

});