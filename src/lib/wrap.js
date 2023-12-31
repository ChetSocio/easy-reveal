/*
 * easy-reveal Wrap Helper
 *
 * Copyright © Chetraj Gautam 2023
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import RevealBase from '../RevealBase';

export default function wrap(props, inEffect, outEffect, children) {
  if ('in' in props)
    props.when = props.in;
  if (React.Children.count(children) < 2)
    return <RevealBase {...props} inEffect={inEffect} outEffect={outEffect} children={children} />
  children = React.Children.map(children, child =>
    <RevealBase {...props} inEffect={inEffect} outEffect={outEffect} children={child} />
  );
  return 'Fragment' in React ? <> {children} </> : <div style={{ overflow: 'hidden' }}> {children} </div>;
}
