import * as React from 'react';

interface HeadShakeProps {
    duration?: number,
    delay?: number,
    count?: number,
    timeout?: number,
    forever?: boolean;
    children?:React.ReactNode
  }


declare const HeadShake: React.FC<HeadShakeProps>

export default HeadShake;
