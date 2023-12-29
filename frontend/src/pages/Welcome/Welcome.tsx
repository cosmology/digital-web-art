import Typography from '@mui/material/Typography';
import { style } from '@mui/system';

import { motion, useScroll } from 'framer-motion';

import { Content } from '@/components/Content';
import Meta from '@/components/Meta';
import TypeWriterText from '@/components/TypeWriterText';
import { Const } from '@/const';
import useOrientation from '@/hooks/useOrientation';
import { usePortfolio } from '@/hooks/usePortfolioContext';

import WelcomeHeaders from './WelcomeHeaders';

function Welcome() {
  // const isPortrait = useOrientation();
  const { scrollYProgress } = useScroll();
  const portfolio = usePortfolio();

  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <Meta title="Welcome" />
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
        {/* <p
          style={{
            margin: 0,
          }}
        >
          Hello I am
        </p> */}
        <Typography variant="h1">{`Hi I'm ${portfolio.person.firstName}`}</Typography>
        <TypeWriterText
          prefix={portfolio.person.shortAbout}
          lines={portfolio.person.typeWriterCallToActions}
          style={{
            fontSize: '1rem', //Const.css.md,
            lineHeight: '1.5rem',
            wordWrap: 'break-word',
            color: Const.css.fc0,
          }}
        />
        <br />
        {portfolio.person.longAbout.map((job, i) => {
          return <WelcomeHeaders key={i} header={job.header} copy={job.copy} />;
        })}
      </Content>
    </>
  );
}

export default Welcome;

/*
<div className="flex justify-center">
  <div className="mt-12 w-full max-w-lg text-white">
    <div className="flex justify-between px-4">
      <button onClick={() => setCount(count - 1)}>
        <ArrowBackIosIcon />
      </button>
      <button onClick={() => setCount(count + 1)}>
        <ArrowForwardIosIcon />
      </button>
    </div>
    <div className="mt-8 flex justify-center">
      <div className="aspect-square w-2/5">
        <div ref={ref} className="relative flex h-full items-center justify-center overflow-hidden bg-gray-700">
          <AnimatePresence custom={{ direction, width }}>
          <motion.div
            key={count}
            // variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            // custom={{ direction, width }}
            className={`absolute flex h-2/3 w-2/3 items-center justify-center text-3xl font-bold ${
              colors[Math.abs(count) % 4]
            }`}
          >
            {count}
          </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>
</div>
*/
