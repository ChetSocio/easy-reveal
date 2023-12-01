
import * as React from 'react';


interface FlipProps {
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
  children?:React.ReactNode
}


declare const Flip: React.FC<FlipProps>

export default Flip;
