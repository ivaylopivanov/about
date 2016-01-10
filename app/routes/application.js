import Ember from 'ember';

export default Ember.Route.extend({

  title(tokens) {
    let title = 'Ivaylo Ivanov';
    if (tokens[0]) {
      title = tokens[0] + ' - ' + title;
    }
    return title;
  }

});
