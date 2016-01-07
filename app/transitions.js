import Ember from "ember";

export default function() {
  let routes = [
    'about',
    'about.languages',
    'about.experience',
    'about.services',
    'about.lastCommit',
    'about.technologies',
    'about.influencers',
    'about.hobbies',
    'about.education',
    'about.faqs',
    'about.portfolio',
    'about.contacts',
    'about.index',
  ];
  this.transition(
    this.toRoute(routes),
    this.use('fade')
  );
};