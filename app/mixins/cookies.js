import Ember from 'ember';

export default Ember.Mixin.create({

  cookieExists(cookie) {
    let cookies = document.cookie.split(' ');
    for (var i = 0; i < cookies.length; i++) {
      let name = cookies[i].split('=')[0];
      if (name.indexOf(cookie) > -1) {
        return true;
      }
    }
    return false;
  },

  setCookie(name, value) {
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 1000 * 36000;
    now.setTime(expireTime);
    let expires = now.toGMTString();
    let cookie = name + '=' + value +'; expires=' + expires + '; path=/';
    document.cookie = cookie;
  }

});