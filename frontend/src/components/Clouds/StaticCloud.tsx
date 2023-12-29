//import typescript from 'simple-icons';
// import javascript from 'simple-icons';
// import java from 'simple-icons';
// import nextdotjs from 'simple-icons';
// import nodedotjs from 'simple-icons'
import { Cloud, ICloud, SimpleIcon, renderSimpleIcon } from 'react-icon-cloud';

import { siJavascript, siMongodb, siNodedotjs, siTypescript } from 'simple-icons/icons';

import { invertBg, lightTheme, useTheme } from '../../hooks/useTheme';

// import { renderCustomIcon, cloudProps } from '../../App';

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  // https://www.goat1000.com/tagcanvas-options.php
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: '#0000',
    reverse: true,
    tooltip: 'native',
    tooltipDelay: 0,
    wheelZoom: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, bg: string) => {
  return renderSimpleIcon({
    icon,
    minContrastRatio: bg === lightTheme.color ? 1.2 : 2,
    bgHex: bg,
    size: 42,
    fallbackHex: invertBg(bg),
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

const staticIcons = [siTypescript, siJavascript, siNodedotjs, siMongodb];

export const StaticCloud = () => {
  const { color } = useTheme();
  const cloudIcons = staticIcons.map((i) => renderCustomIcon(i, color));

  return (
    <Cloud {...cloudProps}>
      {/* <a style={{ color: 'red' }}>hello</a> */}
      <a href="/about" style={{ color: 'red', fontSize: '40px' }} title="Visual Studio Code" rel="noopener">
        About Me
      </a>
      {/* 
        <img height="42" width="42" alt="Visual Studio Code" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/globe-showing-americas_1f30e.png" />
      </a> */}
      {cloudIcons}
    </Cloud>
  );
};
