import Ember from 'ember';

export default Ember.Mixin.create({
  loading() {
    let controller = this.controllerFor('application');
    controller.set('loading', true);
    if( this.router ){
      this.router.one('didTransition', function() {
        controller.set('loading', false);
      });
    }
  },
  finished() {
    this.controllerFor('application').set('loading', false);
  }
});