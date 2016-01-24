// BEGIN-SNIPPET fade-definition
// https://github.com/ember-animation/liquid-fire/blob/master/app/transitions/fade.js
import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function fade(opts={}) {
  var firstStep;
  var outOpts = opts;
  var fadingElement = findFadingElement(this);

  if (fadingElement) {
    // We still have some older version that is in the process of
    // fading out, so out first step is waiting for it to finish.
    firstStep = finish(fadingElement, 'fade-out');
  } else {
    if (isAnimating(this.oldElement, 'fade-in')) {
      // if the previous view is partially faded in, scale its
      // fade-out duration appropriately.
      outOpts = { duration: timeSpent(this.oldElement, 'fade-in') };
    }
    stop(this.oldElement);
    firstStep = animate(this.oldElement, {opacity: 0}, outOpts, 'fade-out');
  }
  return firstStep.then(() => {
    window.scrollTo(0,0);
    Ember.run.later(() => {
      return animate(this.newElement, {opacity: [(opts.maxOpacity || 1), 0]}, opts, 'fade-in');

    }, 300);
  });
}

function findFadingElement(context) {
  for (var i = 0; i < context.older.length; i++) {
    var entry = context.older[i];
    if (isAnimating(entry.element, 'fade-out')) {
      return entry.element;
    }
  }
  if (isAnimating(context.oldElement, 'fade-out')) {
    return context.oldElement;
  }
}
// END-SNIPPET