import Ember from 'ember';

export default Ember.Component.extend({

  title: '',
  imgName: '',
  icon: '',
  imgURL: function() {
    return 'images/' + this.get('imgName') + '.jpg';
  }.property()

});