import * as React from 'react';

interface ZoomProps {
  out?: boolean,
  left?: boolean,
  right?: boolean,
  top?: boolean,
  bottom?: boolean,
  big?: boolean,
  mirror?: boolean,
  opposite?: boolean,
  duration?: number,
  timeout?: number,
  delay?: number,
  count?: number,
  forever?: boolean,
  children?:React.ReactNode
}


declare const Zoom: React.FC<ZoomProps>

export default Zoom;
