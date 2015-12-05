import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', function() {
    this.route('getDescription', {path: "/get-description"});
    this.route('getProgrammingLanguages', {path: "/get-programming-languages"});
    this.route('getNaturalLanguages', {path: "/get-natural-languages"});
    this.route('getExperience', {path: "/get-experience"});
    this.route('getApisWorkedWith', {path: "/get-apis-worked-with"});
    this.route('getLastCommit', {path: "/get-last-commit"});
    this.route('getTechnologies', {path: "/get-technologies"});
    this.route('getInfluencers', {path: "/get-influencers"});
  });
});

export default Router;
