import Ember from 'ember';
import LoadingSliderMixin from '../../mixins/loading-slider';

export default Ember.Route.extend(LoadingSliderMixin, {

  model() {
    let url = 'https://api.github.com/users/ivaylopivanov/events?page=1';
    this.loading();
    return Ember.$.get(url);
  },

  setupController(controller, model) {
    this.finished();
    if (model && model.length) {
      for (let i = 0; i < model.length; i++) {
        if (model[i].type === 'PushEvent') {
          let event = model[i];
          let repoURL = event.repo.url.replace('api.', '').replace('repos/', '');
          let commitURL = event.payload.commits[0].url.replace('api.', '')
          .replace('repos/', '').replace('commits', 'commit');
          controller.set('repoName', event.repo.name);
          controller.set('repoURL', repoURL);
          controller.set('time', event.created_at);
          controller.set('commitMessage', event.payload.commits[0].message);
          controller.set('commitURL', commitURL);
          break;
        }
      }
    }
  }

});
