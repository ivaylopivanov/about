import Ember from 'ember';

export default Ember.Helper.helper((params) => {
  let p1 = params[0];
  let operator = params[1];
  let p2 = params[2];
  switch (operator) {
    case '!=':
      return (p1 != p2) ? true : false;
    case '==':
      return (p1 == p2) ? true : false;
    case '===':
      return (p1 === p2) ? true : false;
    default:
      return false;
  }
});
