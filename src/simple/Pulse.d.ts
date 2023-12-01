
import * as React from 'react';

interface PulseProps {
    duration?: number,
    delay?: number,
    count?: number,
    timeout?: number,
    forever?: boolean;
    children?:React.ReactNode
  }


declare const Pulse: React.FC<PulseProps>

export default Pulse;
