/*
 * Wobble React Component
 *
 * Copyright © Chetraj Gautam 2023
 * Original CSS Effect - Copyright (c) 2016 Daniel Eden
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { bool, number } from 'prop-types';
import wrap from '../lib/wrap';
import { animation, defaults } from '../lib/globals';

const
  propTypes = {
    duration: number,
    timeout: number,
    delay: number,
    count: number,
    forever: bool,
  };

const rule = `
  from {
    transform: none;
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: none;
}
`;

let name = false;
function make() {
  return name || (name = animation(rule));
}


function Wobble({ children, out, timeout, duration = defaults.duration, delay = defaults.delay, count = defaults.count, forever, ...props } = defaults) {
  const effect = { make, duration: timeout === undefined ? duration : timeout, delay, forever, count, style: { animationFillMode: 'both', } };
  return wrap(props, effect, false, children, true);
}

Wobble.propTypes = propTypes;
export default Wobble;
