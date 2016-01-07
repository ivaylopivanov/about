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
    this.route('index', {path: "/"});
    this.route('contacts', {path: "/contacts"});
    this.route('languages', {path: "/languages"});
    this.route('experience', {path: "/experience"});
    this.route('services', {path: "/services"});
    this.route('lastCommit', {path: "/last-commit"});
    this.route('technologies', {path: "/technologies"});
    this.route('influencers', {path: "/influencers"});
    this.route('hobbies', {path: "/hobbies"});
    this.route('education', {path: "/education"});
    this.route('faqs', {path: "/faqs"});
    this.route('portfolio', {path: "/portfolio"});
  });
  this.route('fourOhFour', { path: "*path"});
});

export default Router;
