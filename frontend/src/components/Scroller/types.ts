import { CSSProperties, ReactNode } from 'react';

type ScrollerWrapperProps = {
  children: ReactNode;
  inView: boolean;
  style?: CSSProperties;
};

type StatusProps = { inView: boolean };

type WrapperProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export type { WrapperProps, ScrollerWrapperProps, StatusProps };
