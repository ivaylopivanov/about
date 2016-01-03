import Ember from "ember";

export default function() {
  let routes = [
    'about',
    'about.description',
    'about.programmingLanguages',
    'about.naturalLanguages',
    'about.experience',
    'about.apisWorkedWith',
    'about.lastCommit',
    'about.technologies',
    'about.influencers',
    'about.hobbies',
    'about.education',
  ];
  this.transition(
    this.toRoute(routes),
    this.use('fade')
  );
};