import * as React from 'react';

interface JumpProps {
    duration?: number,
    delay?: number,
    count?: number,
    timeout?: number,
    forever?: boolean;
    children?:React.ReactNode
  }


declare const Jump: React.FC<JelloProps>

export default Jump;
