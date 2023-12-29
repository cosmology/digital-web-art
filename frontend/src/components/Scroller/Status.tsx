import * as React from 'react';
import { CSSProperties } from 'react';

import { StatusProps } from './types';

const statusElement: CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 32,
  height: 32,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0',
};

const emojiIcon: CSSProperties = {
  width: '1em',
  height: '1em',
  lineHeight: 1,
};

function Status({ inView }: StatusProps) {
  return (
    <div style={{ position: 'sticky', top: 0 }}>
      <div style={statusElement}>
        {inView ? (
          <span role="img" aria-label="In view" style={emojiIcon}>
            ✅
          </span>
        ) : (
          <span role="img" aria-label="Outside the viewport" style={emojiIcon}>
            ❌
          </span>
        )}
      </div>
    </div>
  );
}

export default Status;
