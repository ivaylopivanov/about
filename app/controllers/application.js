import Ember from 'ember';
import routes from '../namespaces/routes';

export default Ember.Controller.extend({

  actions: {
    transition(type) {
      let currentIndex = routes.list.indexOf(this.get('currentRouteName'));
      let route = '';
      if (type === 'next') {
        if (currentIndex === routes.list.length - 1) {
          currentIndex = 0;
        }
        route = routes.list[currentIndex + 1];
      } else if (type === 'prev') {
        if (currentIndex === 1) {
          currentIndex = routes.list.length;
        }
        route = routes.list[currentIndex - 1];
      }
      if (route) {
        this.transitionToRoute(route);
      }
    }
  }

});