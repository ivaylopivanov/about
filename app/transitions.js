import Ember from "ember";

export default function() {
  let routes = [
    'about',
    'about.getDescription',
    'about.getProgrammingLanguages',
    'about.getNaturalLanguages',
    'about.getExperience',
    'about.getApisWorkedWith',
    'about.getLastCommit',
    'about.getTechnologies',

  ];
  this.transition(
    this.toRoute(routes),
    this.use('fade')
  );
};