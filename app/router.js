import Ember from 'ember';
import config from './config/environment';
import menu from './services/menu';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.reopen({
  menuManager: Ember.inject.service('menu'),
  hideMenu: function() {
    this.get('menuManager').currentRouteDidChange();
  }.on('didTransition')
});

Router.map(function() {
  this.route('about', function() {
    this.route('description', {path: "/description"});
    this.route('programmingLanguages', {path: "/programming-languages"});
    this.route('naturalLanguages', {path: "/natural-languages"});
    this.route('experience', {path: "/experience"});
    this.route('apisWorkedWith', {path: "/apis-worked-with"});
    this.route('lastCommit', {path: "/last-commit"});
    this.route('technologies', {path: "/technologies"});
    this.route('influencers', {path: "/influencers"});
    this.route('hobbies', {path: "/hobbies"});
    this.route('education', {path: "/education"});
  });
  this.route('fourOhFour', { path: "*path"});
});

export default Router;