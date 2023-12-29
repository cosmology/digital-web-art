import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { Const } from '../const';

export const Content = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
        padding: Const.pad,
      }}
    >
      <div
        data-test-id={'inner content wrapper'}
        style={{
          width: '100%',
          maxWidth: Const.maxWidth,
          paddingRight: Const.css.contentPad,
          paddingLeft: Const.css.contentPad,
          paddingTop: Const.pad * 3,
          paddingBottom: Const.pad * 4,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};
