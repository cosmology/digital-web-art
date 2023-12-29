import React, { useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';

import { motion } from 'framer-motion';
import icons from 'simple-icons';

import { IvanSvgScroll, SvgScroll2, getSimpleSvgs } from '@/components/Svgs';

//import images from '@/images';
import * as Types from '../../../types/types';
import { portfolioData } from '../../../../data/portfolio';
import { Const } from '../../../const';

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

// eslint-disable-next-line react/display-name
export const CardImageCell = React.memo(
  ({
    title,
    rows,
    imgSrc,
    href,
    svgs,
  }: {
    imgSrc: string;
    href: string;
    title: string;
    rows: string[];
    svgs: string[];
  }) => {
    const [carouselWidth, setCarouselWidth] = useState(0);
    const carousel = useRef() as any;
    // // getStaticProps();
    getStaticProps();
    const simpleSvgs = getSimpleSvgs(26, 'dark', true, portfolioData.icons);
    // useEffect(() => {
    //   console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    //   setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // }, []);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          // background: '#ff00ff',
        }}
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          style={{
            width: 75,
            height: 75,
            minWidth: 75,
            minHeight: 75,
          }}
        >
          {/* https://github.com/vercel/next.js/discussions/18312 */}
          <>
            <LazyLoadImage
              key={imgSrc}
              src={imgSrc}
              alt={title}
              style={{ borderRadius: '.3rem' }}
              placeholderSrc={`https://picsum.photos/id/${69}/500`}
              effect="blur"
              width={75}
              height={75}
            />
            {/* <Box
              component="img"
              sx={{
                objectFit: 'fill',
                borderRadius: '.3rem',
                height: 75,
                width: 75,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Some image."
              src={imgSrc}
              loading="lazy"
            /> */}
          </>
        </a>
        <div
          style={{
            wordWrap: 'break-word',
            paddingTop: Const.pad * 2,
            textAlign: 'left',
            color: Const.css.fc0,
            fontSize: Const.css.lg,
            fontWeight: 600,
            lineHeight: Const.css.lg,
          }}
        >
          {title}
        </div>

        {rows.map((row) => (
          <div
            key={row}
            style={{
              textAlign: 'left',
              color: Const.css.fc1,
              fontSize: Const.css.md,
              wordWrap: 'break-word',
              paddingTop: Const.pad,
            }}
          >
            {row}
          </div>
        ))}
        {/* <div>
          <IvanSvgScroll svgs={svgs.map((key) => simpleSvgs[key])} />
        </div> */}

        {/* <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -carouselWidth }} className="inner-carousel">
            {images.map((image: React.Key | null | undefined) => {
              return (
                <motion.div key={image} className="carousel-item">
                  <img src={image} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div> */}
        <SvgScroll2 svgs={svgs.map((key) => simpleSvgs[key])} />
      </div>
    );
  },
  () => true,
);
