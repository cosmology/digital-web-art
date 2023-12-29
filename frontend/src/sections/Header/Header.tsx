import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import Moon from '@mui/icons-material/DarkMode';
import Sun from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { motion, useScroll, useVelocity } from 'framer-motion';

import ContactMeSpeedDial from '@/components/ContactMeSpeedDial';
import BackToTop from '@/components/ScrollToTop';
import { FlexBox } from '@/components/styled';
import { Const } from '@/const';
import useHotKeysDialog from '@/store/hotkeys';
import useNotifications from '@/store/notifications';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';
import { themeModeState } from '@/store/theme';

import { HotKeysButton } from './styled';
import { getRandomJoke } from './utils';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={'down'} in={!trigger}>
      {children}
    </Slide>
  );
}

function Header() {
  const titleRef = useRef() as any;
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [, hotKeysDialogActions] = useHotKeysDialog();
  const [currentTheme, setCurrentTheme] = useRecoilState(themeModeState);
  const slideDistance = 80; // if we are sliding out a nav bar at the top of the screen, this will be it's height
  const threshold = 200; // only slide it back when scrolling back at velocity above this positive (or zero) value

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // true if the page is not scrolled or fully scrolled back
  const [isInView, setIsInView] = useState(true);

  function showNotification() {
    notificationsActions.push({
      options: {
        // Show fully customized notification
        // Usually, to show a notification, you'll use something like this:
        // notificationsActions.push({ message: ... })
        // `message` accepts string as well as ReactNode
        // But you also can use:
        // notificationsActions.push({ options: { content: ... } })
        // to show fully customized notification
        content: (
          <Alert severity="info">
            <AlertTitle>Ready for a joke :))</AlertTitle>
            {getRandomJoke()}
          </Alert>
        ),
      },
    });
  }

  return (
    <Box sx={{ flexGrow: 1, zIndex: 100 }}>
      <HideOnScroll>
        <AppBar elevation={1} position="static">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <FlexBox sx={{ alignItems: 'center' }}>
              <IconButton size="large" onClick={sidebarActions.toggle} color="primary" aria-label="menu">
                <MenuIcon />
              </IconButton>
              {/* <Button onClick={showNotification} color="info">
              {title}
            </Button> */}
            </FlexBox>
            <FlexBox>
              {/* <FlexBox>
              <Tooltip title="Hot keys" arrow>
                <HotKeysButton
                  size="small"
                  color="primary"
                  aria-label="open hotkeys dialog"
                  onClick={hotKeysDialogActions.open}
                >
                  alt + /
                </HotKeysButton>
              </Tooltip>
            </FlexBox>

            <Divider orientation="vertical" flexItem /> */}

              <ContactMeSpeedDial />
              <Divider orientation="vertical" flexItem />
              <Tooltip disableInteractive title="Switch theme" arrow>
                <IconButton
                  sx={{ height: 'fit-content', alignSelf: 'center' }}
                  color="primary"
                  size="large"
                  edge="end"
                  onClick={themeActions.toggle}
                >
                  {currentTheme === 'light' ? <Moon /> : <Sun />}
                </IconButton>
              </Tooltip>
            </FlexBox>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}

export default Header;
