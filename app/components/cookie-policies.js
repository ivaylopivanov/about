import Ember from 'ember';
import cookies from '../mixins/cookies';

export default Ember.Component.extend(cookies, {

  analytics: Ember.inject.service('analytics'),

  didInsertElement() {
    if (this.cookieExists('cookie-policies')) {
      return this.send('enableGA');
    }
    Ember.$('#cookie-bar').css('display', 'block');
  },

  actions: {
    enableGA() {
      this.setCookie('cookie-policies', 'accepted');
      this.get('analytics').enableGA();
      Ember.$('#cookie-bar').slideUp(300, () => {
        Ember.$('#cookie-bar').remove();
      });
    }
  }

});
