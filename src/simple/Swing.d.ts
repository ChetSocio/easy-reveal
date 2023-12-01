import * as React from 'react';

interface SwingProps {
    duration?: number,
    delay?: number,
    count?: number,
    timeout?: number,
    forever?: boolean;
    children?:React.ReactNode
  }


declare const Swing: React.FC<SwingProps>

export default Swing;
