import * as React from 'react';

interface TadaProps {
    duration?: number,
    delay?: number,
    count?: number,
    timeout?: number,
    forever?: boolean;
    children?:React.ReactNode
  }


declare const Tada: React.FC<TadaProps>

export default Tada;
