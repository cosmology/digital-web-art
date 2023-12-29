import { useState } from 'react';
import { InView } from 'react-intersection-observer';

import Typography from '@mui/material/Typography';

import Jobs from '@/components/Cards/CardContent/Jobs';
import { CardRows } from '@/components/Cards/CardWrappers/CardRows';
import { Content } from '@/components/Content';
import Meta from '@/components/Meta';
import ScrollWrapper from '@/components/Scroller/ScrollWrapper';
import Wrapper from '@/components/Scroller/Wrapper';
import { Const } from '@/const';
import { usePortfolio } from '@/hooks/usePortfolioContext';

function Contact() {
  const [inView, setInView] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const portfolio = usePortfolio();

  return (
    <>
      <Meta title="Contact" />
      <Content>
        <Typography variant="h1">Contact</Typography>
        <ScrollWrapper inView={inView}>
          <InView onChange={setInView}>
            {({ ref, inView }) => (
              <Wrapper ref={ref}>
                <CardRows
                  cardStyle={{
                    paddingRight: Const.pad,
                    paddingLeft: Const.pad,
                    paddingTop: Const.pad,
                  }}
                  items={portfolio.jobs}
                  getCell={(t) => <div>{t.company}</div>}
                />
              </Wrapper>
            )}
          </InView>
        </ScrollWrapper>
      </Content>
    </>
  );
}

export default Contact;

{
  /* <motion.div
          className="block"
          onClick={() => setIsActive(!isActive)}
          animate={{
            rotate: isActive ? 180 : 360,
          }}
        >
          Hello Framer motion
        </motion.div> */
}
