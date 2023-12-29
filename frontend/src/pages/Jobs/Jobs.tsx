import Typography from '@mui/material/Typography';

import { motion, useScroll } from 'framer-motion';

import { CardImageCell } from '@/components/Cards/CardContent/CardImageCell';
import { CardGrid } from '@/components/Cards/CardWrappers/CardGrid';
import { Content } from '@/components/Content';
import Meta from '@/components/Meta';
import { Const } from '@/const';
import { usePortfolio } from '@/hooks/usePortfolioContext';

function JobsContent() {
  const { scrollYProgress } = useScroll();
  const portfolio = usePortfolio();

  return (
    <>
      <Meta title="Jobs" />
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
        <Typography variant="h1">Jobs</Typography>

        <CardGrid
          items={portfolio.jobs}
          getCellFront={(t) => (
            <CardImageCell
              title={t.position}
              href={t.src ?? ''}
              imgSrc={t.imgSrc}
              svgs={t.svgs}
              rows={[t.dateRange, t.company + ', ' + t.location, t.description]}
            />
          )}
          getCellBack={(t) => (
            <CardImageCell
              title={t.company}
              href={t.src ?? ''}
              imgSrc={t.imgSrc}
              svgs={t.svgs}
              rows={[t.dateRange, t.company + ', ' + t.location, t.description]}
            />
          )}
        />
      </Content>
    </>
  );
}

export default JobsContent;
/*
<CardRows
  cardStyle={{
    padding: 0,
    // paddingRight: Const.pad,
    // paddingLeft: Const.pad,
    paddingTop: 0, //Const.pad,
  }}
  items={portfolio.jobs}
  getCell={(t) => (
    <Job
      bullets={t.bullets}
      position={t.position}
      dateRange={t.dateRange}
      svgs={t.svgs}
      id={t.id}
      location={t.location}
      imgSrc={t.imgSrc}
      company={t.company}
      description={t.description}
      src={t.src}
    />
  )}
/>
*/
