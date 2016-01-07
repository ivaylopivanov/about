import Ember from 'ember';

export default Ember.Mixin.create({

  id: null,

  init() {
    this._super();
    let number = Math.floor((Math.random() * 100), 1);
    this.set('id', this.get('type') + '-' + number);
  }

});