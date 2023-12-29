import * as React from 'react';
import { CSSProperties } from 'react';

import { WrapperProps } from './types';

const sharedStyle: CSSProperties = {
  display: 'flex',
  // minHeight: '100vh',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  // textAlign: 'center',
  //background: '#148bb4',
  color: 'azure',
};

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(({ style, ...props }, ref) => {
  return <div ref={ref} style={{ ...sharedStyle, ...style }} {...props} />;
});

export default Wrapper;
