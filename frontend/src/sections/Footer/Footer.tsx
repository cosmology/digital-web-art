// import { Logo } from './Logo';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
// import MailIcon from '@mui/icons-material/Mail';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import WorkIcon from '@mui/icons-material/Work';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { routesState } from '@/store/routes';

export interface IFooterProps {}

// export const ClusterMap = () => {
//   return <div></div>;
// };
// const Rooms = () => {
//   return <div></div>;
// };

// const AddRoom = () => {
//   return <div></div>;
// };
/* // to accesss the above, useful for map
  <Box ref={ref}>
    {
      {
        0: <ClusterMap />,
        1: <Rooms />,
        2: <AddRoom />,
      }[value]
    }
  </Box> 
*/

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const [value, setValue] = useState(0);
  const [currentRoute, setCurrentRoute] = useRecoilState(routesState);
  const location = useLocation();

  const getPageIndex = (currentRoute: string | ((currVal: string) => string)) => {
    switch (currentRoute) {
      case '/':
        setCurrentRoute(currentRoute);
        return 0;
      case '/stack':
        setCurrentRoute(currentRoute);
        return 1;
      case '/jobs':
        setCurrentRoute(currentRoute);
        return 2;
      case '/projects':
        setCurrentRoute(currentRoute);
        return 3;
      default:
        return 0;
    }
  };

  const ref = useRef() as any;

  useEffect(() => {
    setValue(getPageIndex(location.pathname));
  }, [value, currentRoute]);
  return (
    <BottomNavigation ref={ref} value={value} onChange={(e, newValue) => setValue(newValue)}>
      <BottomNavigationAction label="Welcome" component={Link} to="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="Stack" component={Link} to="/stack" icon={<StackedBarChartIcon />} />
      <BottomNavigationAction label="Jobs" component={Link} to="/jobs" icon={<WorkIcon />} />
      <BottomNavigationAction label="Projects" component={Link} to="/projects" icon={<AppsIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
