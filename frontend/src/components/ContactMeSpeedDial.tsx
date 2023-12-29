import * as React from 'react';
import { useRecoilState } from 'recoil';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import { linkedIn, repository, resumePDF } from '@/config';
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

// export interface ISpeedDialProps {
//   onClickCloseToolbox: React.MouseEventHandler<HTMLButtonElement>;
// }

// // React.FunctionComponent<IFooterProps> = (props) =>
// const Toolbox: React.FunctionComponent<ISpeedDialProps> = ({ onClickCloseToolbox }) => (
//   <div style={{ position: 'relative' }}>
//     <BottomNavigation style={{ background: purple }}>
//       {[]
//         .concat(list.items)
//         .reverse()
//         .map((item, index) => {
//           return <BottomNavigationAction key={index} onClick={onClickCloseToolbox} {...item} />;
//         })}
//     </BottomNavigation>
//   </div>
// );

export default function ContactMeSpeedDial() {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeModeState);

  //(theme) => `${theme.mixins.toolbar.minHeight}px` }}

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
            // TODO: figure out primary
            color: (theme) => `${theme.palette.primary.main}`,
            // color: currentTheme === 'light' ? Const.css.primaryDark : (theme) => `${theme.palette.primary.main}`,
            //color: currentTheme === 'light' ? Const.css.primaryDark : '#90caf9',
          },
        }}
        icon={<SpeedDialIcon openIcon={<ContactPageIcon />} />}
        // icon={<ContactPageIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            FabProps={{
              size: 'small',
              style: {
                backgroundColor: Const.css.navbg,
                boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
                WebkitBackdropFilter: 'blur(10px)',
                backdropFilter: 'blur(10px)',
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
