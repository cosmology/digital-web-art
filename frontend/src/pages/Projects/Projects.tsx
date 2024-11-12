import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useRecoilState } from 'recoil';

import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import green from '@mui/material/colors/green';
import { styled } from '@mui/material/styles';

import { motion, useScroll } from 'framer-motion';

import * as Types from '@/types/types';
import { Content } from '@/components/Content';
import Meta from '@/components/Meta';
import { Const } from '@/const';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import useTheme, { themeModeState } from '@/store/theme';

// import { invertBg, useTheme } from '@/hooks/useTheme';

export interface IProjectsPageProps {}
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectsPage: React.FunctionComponent<IProjectsPageProps> = (props) => {
  const { scrollYProgress } = useScroll();
  const portfolio = usePortfolio();
  const [expanded, setExpanded] = React.useState(false);

  const [currentTheme, setCurrentTheme] = useRecoilState(themeModeState);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let bgColor = currentTheme === 'light' ? Const.css.cardLight : Const.css.cardDark; //
  let fontColor = currentTheme === 'light' ? Const.css.primaryDark : Const.css.primaryLight;
  let borderColor = currentTheme === 'light' ? Const.css.borderLight : Const.css.uniqueCard;
  let workIconStyles = {
    background: currentTheme === 'light' ? Const.css.secondaryLight : Const.css.primaryDark,
    color: currentTheme === 'light' ? Const.css.primaryDark : Const.css.secondaryDark,
  };
  let hockeyIconStyles = {
    background: currentTheme === 'light' ? Const.css.secondaryLight : green[300],
    color: currentTheme === 'light' ? Const.css.primaryDark : green[900],
  };

  return (
    <>
      <Meta title="Work" />
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
        <Typography variant="h1">Projects</Typography>
        <VerticalTimeline animate={false}>
          {portfolio.projects.map((job: Types.Project, i: number) => {
            let isWorkIcon = job.type === 'work';

            console.log(job.imgSrc);

            return (
              <VerticalTimelineElement
                key={i}
                // panel bg
                contentStyle={{
                  background: Const.css.uniqueCard,
                  color: fontColor,
                  borderRadius: Const.css.cardRad,
                  border: Const.css.sharedBorder,
                }}
                // arrow style
                contentArrowStyle={{ borderRight: `7px solid #ced0d5` }}
                // contentArrowStyle={{ border: '1px solid $ff00000' }}
                date={job.dateRange}
                iconStyle={isWorkIcon ? workIconStyles : hockeyIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SportsHockeyIcon />}
              >
                <Card key={i} elevation={0}>
                  <CardHeader
                    avatar={
                      <Avatar variant="rounded">
                        <LazyLoadImage
                          key={job.id}
                          src={job.imgSrc}
                          alt={job.name}
                          style={{ borderRadius: '.3rem', backgroundColor: '#fff' }}
                          placeholderSrc={`https://digitalwebart.net/images/robot_avatar.png`}
                          effect="blur"
                          width={75}
                          height={75}
                        />
                      </Avatar>
                      // <Avatar
                      //   sx={{
                      //     // pt: 1,
                      //     // border: 1,
                      //     // boxShadow: 0,
                      //     // mt: 1,
                      //     fontWeight: 'bold',
                      //     color: (theme) =>
                      //       theme.palette.mode === 'dark' ? Const.css.primaryDark : Const.css.secondaryDark,
                      //     flexGrow: 1,
                      //     backgroundColor: (theme) =>
                      //       theme.palette.mode === 'dark' ? Const.css.secondaryDark : Const.css.secondaryLight,
                      //   }}
                      //   aria-label={job.name}
                      // >
                      //   {job.name.substring(0, 1)}
                      // </Avatar>
                    }
                    title={<Typography variant="h5">{job.name}</Typography>}
                    subheader={job.position}
                  />
                  {/* <CardMedia component="img" height="194" image={job.imgSrc} alt={job.name} loading="lazy" /> */}
                  <CardContent>
                    {/* <p>hello</p> */}
                    <Typography variant="body1" color="text.secondary">
                      {job.subHeading}
                      <ul
                        style={{
                          margin: 0,
                          marginLeft: -24,
                        }}
                      >
                        {job.bullets.map((b) => {
                          return (
                            <li
                              key={b}
                              style={{
                                paddingTop: Const.pad,
                                color: Const.css.fc1,
                                fontSize: Const.css.md,
                                textAlign: 'left',
                                wordWrap: 'break-word',
                              }}
                            >
                              {b}
                            </li>
                          );
                        })}
                      </ul>
                    </Typography>
                  </CardContent>
                  {/* <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <ul
                        style={{
                          margin: 0,
                          marginLeft: -24,
                        }}
                      >
                        {job.bullets.map((b) => {
                          return (
                            <li
                              key={b}
                              style={{
                                paddingTop: Const.pad,
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
                  </Collapse> */}
                </Card>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Content>
    </>
  );
};

export default ProjectsPage;
