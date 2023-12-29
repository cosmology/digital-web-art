import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton, { IconButtonProps } from '@mui/material/IconButton/IconButton';
import Typography from '@mui/material/Typography';

import * as icons from 'simple-icons';

import { Const } from '@/const';
import { themeModeState } from '@/store/theme';

import * as Types from '../../../types/types';
import { portfolioData } from '../../../../data/portfolio';
import { SvgScroll, SvgScroll2, getInteractiveSvgs, getSimpleSvgs, getSvgFromSimpleIcon } from '../../Svgs';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

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

export const Job = React.memo(
  ({
    id,
    position,
    imgSrc,
    bullets,
    company,
    svgs,
    dateRange,
    description,
  }: Types.Job & {
    company: string;
    description: string;
  }) => {
    getStaticProps();
    const simpleSvgs = getSimpleSvgs(26, 'dark', true, portfolioData.icons);
    const [currentTheme, setCurrentTheme] = useRecoilState(themeModeState);
    return (
      <Card key={id}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                fontWeight: 'bold',
                color: (currentTheme) =>
                  currentTheme.palette.mode === 'dark' ? Const.css.cardDark : Const.css.cardLight,
                flexGrow: 1,
                backgroundColor: (currentTheme) =>
                  currentTheme.palette.mode === 'dark' ? Const.css.cardDark : Const.css.cardLight,
              }}
              aria-label={company}
            >
              {company.substring(0, 1)}
            </Avatar>
          }
          title={<Typography variant="h5">{position}</Typography>}
          subheader={dateRange}
        />
        {/* <CardMedia component="img" height="194" image={imgSrc} alt={company} /> */}
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
          <div
            style={{
              display: 'grid',
              justifyContent: 'center',
            }}
          >
            <SvgScroll svgs={svgs.map((key) => simpleSvgs[key])} />
          </div>
          <ul
            style={{
              margin: 0,
              marginLeft: -Const.pad,
            }}
          >
            {bullets.map((b) => {
              return (
                <li
                  key={b}
                  style={{
                    paddingTop: Const.pad / 2,
                    color: Const.css.fc1,
                    fontSize: Const.css.sm,
                    textAlign: 'left',
                    wordWrap: 'break-word',
                  }}
                >
                  {b}
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    );
  },
);

export default Job;
