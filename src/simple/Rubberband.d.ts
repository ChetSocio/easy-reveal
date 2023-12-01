import * as React from 'react';

interface RubberBandProps {
    duration?: number,
    delay?: number,
    count?: number,
    timeout?: number,
    forever?: boolean;
    children?:React.ReactNode
  }


declare const RubberBand: React.FC<RubberBandProps>

export default RubberBand;
