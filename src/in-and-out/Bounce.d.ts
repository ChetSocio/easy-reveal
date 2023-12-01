import * as React from 'react';


interface BounceProps {
  out?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  mirror?: boolean;
  opposite?: boolean;
  duration?: number;
  timeout?: number;
  delay?: number;
  count?: number;
  forever?: boolean;
}


declare const Bounce: React.Component<BounceProps>

export default Bounce;
