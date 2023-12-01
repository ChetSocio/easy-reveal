import * as React from 'react';


interface SlideProps {
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


declare const Slide: React.FC<SlideProps>

export default Slide;
