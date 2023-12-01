import * as React from 'react';

interface FadeProps  {
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
  distance?: string,
  delay?: number,
  count?: number,
  forever?: boolean,
  children: React.ReactNode;
}


declare class Fade extends React.FC<FadeProps> {

  render(): JSX.Element;
}

export default Fade;
