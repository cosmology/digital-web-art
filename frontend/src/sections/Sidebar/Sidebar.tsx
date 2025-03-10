// import * as React from 'react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import DefaultIcon from '@mui/icons-material/Deblur';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import routes from '@/routes';
import { routesState } from '@/store/routes';
import useSidebar from '@/store/sidebar';

import CertificationBadge from '../../components/CertificationBadge';
import { Profile } from './Profile';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string | undefined;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();
  const [currentRoute, setCurrentRoute] = useRecoilState(routesState);
  const [selectedRoute, setSelectedRoute] = React.useState(currentRoute);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListChange = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    setCurrentRoute(path);
    sidebarActions.close();
  };
  const getPageIndex = () => {
    switch (currentRoute) {
      case '/':
        return setSelectedIndex(0);
      case '/stack':
        return setSelectedIndex(1);
      case '/jobs':
        return setSelectedIndex(2);
      case '/projects':
        return setSelectedIndex(3);
      default:
        return setSelectedIndex(0);
    }
  };
  useEffect(() => {
    setSelectedRoute(currentRoute);
    getPageIndex();
  }, [currentRoute, selectedRoute]);

  return (
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      swipeAreaWidth={30}
    >
      <Profile />
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          paddingTop: '20px',
        }}
      >
        <CertificationBadge />
      </div>
      <List sx={{ width: 250, pt: (theme) => `${Number(theme.mixins.toolbar.minHeight) / 2}px` }}>
        {Object.values(routes)
          .filter((route) => route.title)
          .map(({ path, title, icon: Icon }, i) => (
            // <ListItemLink key={path} to={path} primary={title} icon={Icon ? <Icon /> : <DefaultIcon />} />
            <ListItem sx={{ p: 0 }} key={path}>
              <ListItemButton
                key={path}
                // sx={{
                //   '&.Mui-selected': {
                //     color: 'white',
                //     backgroundColor: Const.css.primaryDark,
                //   },
                //   '&.Mui-focusVisible': {
                //     backgroundColor: Const.css.secondaryDark,
                //   },
                //   ':hover': {
                //     color: 'white',
                //     backgroundColor: Const.css.secondaryDark,
                //   },
                // }}
                onClick={(event: React.MouseEvent<HTMLAnchorElement>) => handleListChange(event, path)}
                selected={selectedIndex === i}
                component={Link}
                to={path}
              >
                <ListItemIcon>{Icon ? <Icon /> : <DefaultIcon />}</ListItemIcon>
                <ListItemText>{title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
function setCurrentRoute(arg0: string) {
  throw new Error('Function not implemented.');
}
