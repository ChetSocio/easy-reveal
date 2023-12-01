import * as React from 'react';

interface SpinProps {
    duration?: number,
    delay?: number,
    count?: number,
    timeout?: number,
    forever?: boolean;
    children?:React.ReactNode
  }


declare const Spin: React.FC<SpinProps>

export default Spin;
