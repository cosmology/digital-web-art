import { useRef } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { motion, useScroll } from 'framer-motion';

import { SkillCloud } from '@/components/Clouds/SkillCloud';
import { Content } from '@/components/Content';
import StackContent from '@/components/LoremIpsum';
import Meta from '@/components/Meta';
import { Const } from '@/const';

function Stack() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Meta title="Stack" />
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
        <Typography variant="h1">Stack</Typography>
        <SkillCloud />
        <StackContent />
      </Content>
    </>
  );
}

export default Stack;
