import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { motion, useAnimation } from 'framer-motion';

import { Const } from '@/const';

interface IWelcomeHeadersProps {
  header: string | undefined;
  copy: string | undefined;
}

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 1 },
  initial: {
    x: '0px',
  },
  active: {
    backgroundColor: '#f00',
    x: '0px',
  },
  inactive: {
    backgroundColor: '#fff',
    x: '-200px',
    transition: { duration: 2 },
  },
};

// transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
function Square() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={squareVariants} className="square"></motion.div>
  );
}

const WelcomeHeaders: React.FunctionComponent<IWelcomeHeadersProps> = ({ header, copy }) => {
  const renderHeader = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    return (
      <motion.div ref={ref} initial="hidden">
        <Typography
          sx={{
            pt: Const.pad / 4,
            pb: Const.pad / 8,
          }}
          variant="h5"
          style={{
            transform: inView ? 'none' : 'translateX(-200px)',
            opacity: inView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          {header}
        </Typography>
      </motion.div>
    );
  };

  const renderHeaderCopy = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    return (
      <motion.div ref={ref} animate={controls} initial="hidden" variants={squareVariants} className="square">
        <Typography variant="body1">{copy}</Typography>
      </motion.div>
    );
  };
  return (
    <>
      <Box component={renderHeader} />
      <Box component={renderHeaderCopy} />
    </>
  );
};

export default WelcomeHeaders;
