import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import WorkIcon from '@mui/icons-material/Work';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Welcome',
    icon: HomeIcon,
  },
  // [Pages.About]: {
  //   component: asyncComponentLoader(() => import('@/pages/About')),
  //   path: '/about',
  //   title: 'About',
  //   icon: PermIdentityIcon,
  // },
  [Pages.Stack]: {
    component: asyncComponentLoader(() => import('@/pages/Stack')),
    path: '/stack',
    title: 'Stack',
    icon: StackedBarChartIcon,
  },
  [Pages.Jobs]: {
    component: asyncComponentLoader(() => import('@/pages/Jobs')),
    path: '/jobs',
    title: 'Jobs',
    icon: WorkIcon,
  },
  [Pages.Projects]: {
    component: asyncComponentLoader(() => import('@/pages/Projects')),
    path: '/projects',
    title: 'Projects',
    icon: AppsIcon,
  },
  // [Pages.Contact]: {
  //   component: asyncComponentLoader(() => import('@/pages/Contact')),
  //   path: '/contact',
  //   title: 'Contact',
  //   icon: MailIcon,
  // },

  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
