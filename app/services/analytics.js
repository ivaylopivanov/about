import Ember from 'ember';
import api from '../mixins/api';

export default Ember.Service.extend(api,{

  gaEnabled: false,

  init() {
    Ember.$.post(this.get('host') + '/connections', {'version': 2});
  },

  enableGA() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','__ga');
    __ga('create', 'UA-72391414-1', 'auto');
    __ga('send', 'pageview');
    this.set('gaEnabled', true);
  },

  currentRouteDidChange(url) {
    this._updateRoute(url);
    if (typeof __ga === 'function' && this.get('gaEnabled')) {
      __ga('send', 'pageview', {
        'page': url,
        'title': document.title
      });
    }
  },

  _updateRoute(url) {
    Ember.$.post(this.get('host') + '/routes', {url: url, version: 2});
  }

});