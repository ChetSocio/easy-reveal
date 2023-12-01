import * as React from 'react';

interface FlashProps {
  duration?: number,
  delay?: number,
  count?: number,
  timeout?: number,
  forever?: boolean;
  children?:React.ReactNode
}


declare const Flash: React.FC<FlashProps>

export default Flash;
