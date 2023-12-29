import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { motion, useScroll } from 'framer-motion';

import { Content } from '@/components/Content';
import LoremIpsum from '@/components/LoremIpsum';
import Meta from '@/components/Meta';
import { Const } from '@/const';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Meta title="About" />
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: Const.progressLine,
          background: Const.css.progressLineColor,
          transformOrigin: '0%',
          zIndex: 200,
        }}
      />
      <Content>
        <Typography variant="h1">About</Typography>
        <LoremIpsum />
      </Content>
    </>
  );

  // return (
  //   <Content>
  //     <Typography variant="h1" sx={{ pb: 4 }}>
  //       {portfolio.person.firstName + ' ' + portfolio.person.lastName}
  //     </Typography>
  //     <TypeWriterText
  //       prefix={portfolio.person.shortAbout}
  //       lines={portfolio.person.typeWriterCallToActions}
  //       style={{
  //         fontSize: Const.css.md,
  //         wordWrap: 'break-word',
  //         color: Const.css.fc0,
  //       }}
  //     />
  //   </Content>
  // );
};

export default AboutPage;
