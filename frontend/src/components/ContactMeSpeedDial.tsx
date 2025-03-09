import * as React from 'react';
import { useRecoilState } from 'recoil';

import ContactPageIcon from '@mui/icons-material/ContactPage';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

import { linkedIn, repository } from '@/config';
import { Const } from '@/const';
import { themeModeState } from '@/store/theme';

const actions = [
  {
    icon: (
      <IconButton color="primary" size="small" component="a" href="/IvanProkicCV.pdf" download>
        <PictureAsPdfIcon />
      </IconButton>
    ),
    name: 'Resume',
  },
  {
    icon: (
      <IconButton color="primary" size="small" component="a" href={linkedIn} target="_blank">
        <LinkedIn />
      </IconButton>
    ),
    name: 'LinkedIn',
  },
  {
    icon: (
      <IconButton color="primary" size="small" component="a" href={repository} target="_blank">
        <GitHubIcon />
      </IconButton>
    ),
    name: 'Github',
  },
];

export default function ContactMeSpeedDial() {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeModeState);


  return (
    <Box>
      <SpeedDial
        FabProps={{
          size: 'small',
          style: { backgroundColor: Const.css.navbg },
        }}
        direction="left"
        ariaLabel="Contact me"
        sx={{
          '& .MuiFab-primary': {
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',

            WebkitBackdropFilter: 'blur(10px)',
            backdropFilter: 'blur(10px)',
            backgroundColor: Const.css.navbg,
            marginRight: '10px',
            // TODO: figure out primary
            color: (theme) => `${theme.palette.primary.main}`,
            // color: currentTheme === 'light' ? Const.css.primaryDark : (theme) => `${theme.palette.primary.main}`,
            //color: currentTheme === 'light' ? Const.css.primaryDark : '#90caf9',
          },
        }}
        icon={<SpeedDialIcon openIcon={<ContactPageIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            FabProps={{
              size: 'small',
              style: {
                backgroundColor: Const.css.navbg,
                boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
                WebkitBackdropFilter: 'blur(10px)',
                backdropFilter: 'blur(10px)'
              },
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="bottom"
            arrow={true}
            TransitionComponent={Fade}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
