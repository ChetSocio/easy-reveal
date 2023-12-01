import * as React from 'react';

interface ShakeProps {
    duration?: number,
    delay?: number,
    count?: number,
    timeout?: number,
    forever?: boolean;
    children?:React.ReactNode
  }


declare const Shake: React.FC<ShakeProps>

export default Shake;
