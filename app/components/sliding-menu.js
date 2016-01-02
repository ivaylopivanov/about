import Ember from 'ember';
import menu from '../services/menu';

export default Ember.Component.extend({
  menuManager: Ember.inject.service('menu'),

  didInsertElement() {
    new TimelineMax({repeat: -1})
    .to($('.icon-bar:nth-child(1)'), 0.5, {background: "rgb(159, 130, 52)"})
    .to($('.icon-bar:nth-child(2)'), 0.5, {background: "rgb(159, 130, 52)"})
    .to($('.icon-bar:nth-child(3)'), 0.5, {background: "rgb(159, 130, 52)"});
  },

  actions: {
    show() {
      this.get('menuManager').show();
    },
    hide() {
      this.get('menuManager').hide();
    }
  }

});