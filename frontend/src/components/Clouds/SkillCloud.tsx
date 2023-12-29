import React from 'react';
import { Cloud, ICloud, renderSimpleIcon } from 'react-icon-cloud';

import * as icons from 'simple-icons';

import * as Types from '@/types/types';
import { Const } from '@/const';
import { useTheme } from '@/hooks/useTheme';

import { portfolioData } from '../../../data/portfolio';

const getStaticProps: any = async () => {
  portfolioData.icons = portfolioData.skills.map((s) => {
    const simpleI = (icons as unknown as { [k: string]: Types.SimpleIcon })[s];
    return {
      title: simpleI.title ?? s,
      hex: simpleI.hex ?? null,
      path: simpleI.path ?? null,
      slug: s,
    };
  });

  return {
    props: portfolioData,
  };
};

const cloudProps: Omit<ICloud, 'children'> = {
  id: 'stable-id-for-csr-ssr',
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: Const.pad,
      // marginLeft: Const.pad * 2,
      // marginRight: Const.pad * 2,
    },
  },
  canvasProps: {
    style: {
      maxWidth: '60%',
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
  },
};

const getPortfolioIcons = ({ color, icons }: { color: string; icons: Types.SimpleIcon[] }) => {
  const bgHex = color === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = color === 'light' ? '#6e6e73' : '#a1a1a6';
  const minContrastRatio = color === 'dark' ? 2 : 1.2;

  return portfolioData.icons.map((icon) => {
    return renderSimpleIcon({
      icon,
      bgHex,
      fallbackHex,
      minContrastRatio,
      aProps: {
        href: '#',
        onClick: (e) => {
          e.preventDefault();
        },
      },
    });
  });
};

export const SkillCloud = React.memo(() => {
  // we should do getStaticProps injection before in app init phase
  // and get it from portfolio
  // const { icons } = usePortfolio();
  const { color } = useTheme();
  const icons = getStaticProps();

  return <Cloud {...cloudProps}>{getPortfolioIcons({ color, icons })}</Cloud>;
});

SkillCloud.displayName = 'SkillCloud';
