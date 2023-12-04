/*
 * easy-reveal Global Helpers
 *
 * Copyright © Chetraj Gautam 2023
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

//import {version} from 'react';

export const namespace = 'easy-reveal';//, is16 = parseInt(version, 10) >= 16;
export const defaults = { duration: 1000, delay: 0, count: 1, };

export let
  ssr = true,
  observerMode = false,
  raf = cb => window.setTimeout(cb, 66),
  disableSsr = () => ssr = false,
  fadeOutEnabled = false,
  ssrFadeout = (enable = false) => fadeOutEnabled = enable,
  globalHide = false,
  ie10 = false,
  collapseend;
let counter = 1, effectMap = {}, sheet = false, name = `${namespace}-${Math.floor(Math.random() * 1000000000000000)}-`;

export function insertRule(rule) {
  try {
    return sheet.insertRule(rule, sheet.cssRules.length);
  }
  catch (e) {
    console.warn('easy-reveal - animation failed');
  }
}

export function cascade(i, start, end, duration, total) {
  const minv = Math.log(duration), maxv = Math.log(total), scale = (maxv - minv) / (end - start);
  return Math.exp(minv + scale * (i - start));
}

export function animation(effect) {
  if (!sheet) return '';
  const rule = `@keyframes ${name + counter}{${effect}}`;
  const effectId = effectMap[effect];
  if (!effectId) {
    insertRule(rule);
    effectMap[effect] = counter;
    return `${name}${counter++}`;
  }
  return `${name}${effectId}`;
}

export function hideAll() {
  if (globalHide)
    return;
  globalHide = true;
  window.removeEventListener('scroll', hideAll, true);
  insertRule(`.${namespace} { opacity: 0; }`);
  window.removeEventListener('orientationchange', hideAll, true);
  window.document.removeEventListener('visibilitychange', hideAll);
}

if (typeof window !== 'undefined' && window.document && typeof navigator !== 'undefined') {
  observerMode = 'IntersectionObserver' in window
    && 'IntersectionObserverEntry' in window  // bypassing
    && 'intersectionRatio' in window.IntersectionObserverEntry.prototype // inclomplete implementations
    && (/\{\s*\[native code\]\s*\}/).test('' + IntersectionObserver); // and buggy polyfills



  raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || raf;

  let ssr = window.document.querySelectorAll('div[data-reactroot]').length > 0;

  ie10 = navigator.userAgent.indexOf("MSIE 10") !== -1;


  if (ssr && 'performance' in window &&
    'now' in window.performance &&
    Date.now() - window.performance.now() < 300)
    ssr = false;

  if (ssr)
    window.setTimeout(disableSsr, 1500);

  if (!observerMode) {
    collapseend = document.createEvent('Event');
    collapseend.initEvent('collapseend', true, true);
  }

  let element = document.createElement('style');
  document.head.appendChild(element);

  if (element.sheet && element.sheet.cssRules && element.sheet.insertRule) {
    sheet = element.sheet;
    window.addEventListener('scroll', hideAll, true);
    window.addEventListener("orientationchange", hideAll, true);
    window.document.addEventListener("visibilitychange", hideAll);
  }
}

export default function config({ ssrFadeout }) {
  fadeOutEnabled = ssrFadeout;
}
