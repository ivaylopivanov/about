import Ember from 'ember';
// https://github.com/jerel/ember-cli-loading-slider

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['loading-slider'],
  classNameBindings: 'expanding',

  initialize: Ember.on('didReceiveAttrs', function() {
    this.set('isLoading', this.getAttr('isLoading'));
    this.set('duration', this.getAttr('duration'));
    this.set('expanding', this.getAttr('expanding'));
    this.set('speed', this.getAttr('speed'));
    this.set('color', 'rgb(180, 157, 96)');
    this.manage();
  }),

  manage() {
    if (this.get('isLoading')) {
      if (this.get('expanding')) {
        this.expandingAnimate.call(this);
      } else {
        this.animate.call(this);
      }
    } else {
      this.set('isLoaded', true);
    }
  },

  animate() {
    this.set('isLoaded', false);
    let elapsedTime = 0;
    let inner = Ember.$('<span>');
    let outer = this.$();
    let duration = this.getWithDefault('duration', 300);
    let innerWidth = 0;
    let outerWidth = this.$().width();
    let stepWidth = Math.round(outerWidth / 50);
    let color = this.get('color');

    outer.append(inner);
    if (color) {
      inner.css('background-color', color);
    }

    let interval = window.setInterval(() => {
      elapsedTime = elapsedTime + 10;
      inner.width(innerWidth = innerWidth + stepWidth);

      // slow the animation if we used more than 75% the estimated duration
      // or 66% of the animation width
      if (elapsedTime > (duration * 0.75) || innerWidth > (outerWidth * 0.66)) {
        // don't stop the animation completely
        if (stepWidth > 1) {
          stepWidth = stepWidth * 0.97;
        }
      }

      if (innerWidth > outerWidth) {
        Ember.run.later(() => {
          outer.empty();
          window.clearInterval(interval);
        }, 50);
      }

      // the activity has finished
      if (this.get('isLoaded')) {
        // start with a sizable pixel step
        if (stepWidth < 10) {
          stepWidth = 10;
        }
        // accelerate to completion
        stepWidth = stepWidth + stepWidth;
      }
    }, 10);
  },

  expandingAnimate() {
    let self = this;
    let outer = this.$();
    let speed = this.getWithDefault('speed', 1000);
    let colorQueue = this.get('color');

    if ('object' === typeof colorQueue) {
      (function updateFn() {
        let color = colorQueue.shift();
        colorQueue.push(color);
        self.expandItem.call(self, color);
        if ( ! self.get('isLoading')) {
          outer.empty();
        } else {
          window.setTimeout(updateFn, speed);
        }
      })();
    } else {
      this.expandItem.call(this, colorQueue, true);
    }
  },

  expandItem(color, cleanUp) {
    let inner = Ember.$('<span>').css({'background-color': color});
    let outer = this.$();
    let innerWidth = 0;
    let outerWidth = outer.width();
    let stepWidth = Math.round(outerWidth / 50);

    outer.append(inner);

    let interval = window.setInterval(() => {
      let step = (innerWidth = innerWidth + stepWidth);
      if (innerWidth > outerWidth) {
        window.clearInterval(interval);
        if (cleanUp) {
          outer.empty();
        }
      }
      inner.css({
        'margin-left': '-' + step / 2 + 'px',
        'width': step
      });
    }, 10);
  },

  didInsertElement() {
    let color = this.get('color');
    this.$().html('<span>');
    if (color) {
      this.$('span').css('background-color', color);
    }
  }

});
