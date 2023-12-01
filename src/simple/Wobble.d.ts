import * as React from 'react';

interface WobbleProps {
    duration?: number,
    delay?: number,
    count?: number,
    timeout?: number,
    forever?: boolean;
    children?:React.ReactNode
  }


declare const Wobble: React.FC<WobbleProps>

export default Wobble;
