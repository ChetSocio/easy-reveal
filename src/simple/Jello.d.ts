import * as React from 'react';

interface JelloProps {
    duration?: number,
    delay?: number,
    count?: number,
    timeout?: number,
    forever?: boolean;
    children?:React.ReactNode
  }


declare const Jello: React.FC<JelloProps>

export default Jello;
