import { rgbToHex } from '@mui/system';

export const Const = {
  maxWidth: 1000,
  topNav: 60,
  drawerWidth: 275,
  reactScrollProps: {
    spy: true,
    smooth: true,
    duration: 400,
    activeClass: 'scroll-active',
    offset: -80,
  },
  rad: 10,
  pad: 20,
  progressLine: 3,
  css: {
    //////// MUI needs CSS processed /////////
    progressLineColor: '#90CAF9', // '#304ffe',
    cardRad: '1rem',
    uniqueCard: 'rgba(232,236,244, .1)', // 4050B5,
    timelineIconBg: 'rgb(26,51,110)',
    sharedBorder: '1px solid #ced0d5',

    ////// Dark theme
    // rgba(0,31,63, 1) = 001F3F
    // rgba(147,158,255,1) =  939eff
    // rgba(64,80,181,1) = 4050B5
    primaryDark: 'rgba(0,31,63, 1)', // 311B92  // 211749 //203B69 2b2253
    secondaryDark: '#90CAF9', //'#939eff',
    cardDark: 'rgba(0,31,63, .5)', // old 4050B5 31215f
    // cardDark: 'rgba(64,80,181, 1)', // old 4050B5 31215f
    borderDark: '1px solid rgba(147,158,255, .2)',

    ////// Light theme
    primaryLight: 'rgba(255,255,255, 1)', // ,rgba(222,225,229, 1)
    secondaryLight: '#ced0d5',
    lightBg: '#eaedf2', //'#dee1e5', //'rgba(222,225,229, 1)',
    cardLight: 'rgba(222,225,229, .5)',
    // cardLight: 'linear-gradient(90deg, rgba(222,225,229,1) 0%, rgba(210,217,227,1) 92%)', // 4050B5
    borderLight: '1px solid #ccc',

    //////// non mui load from pre-processor /////////
    navbg: 'var(--nav-bg)',
    bgc0: 'var(--bgc-0)',
    bgc1: 'var(--bgc-1)',
    bgc2: 'var(--bgc-2)',
    fc0: 'var(--fc-0)',
    fc1: 'var(--fc-1)',
    pallet0: 'var(--pallet-0)',
    pallet1: 'var(--pallet-1)',
    shadow: 'var(--shadow)',
    border: 'var(--border)',
    sm: 'var(--fs-sm)',
    md: 'var(--fs-md)',
    lg: 'var(--fs-lg)',
    xlg: 'var(--fs-xl)',
    xxlg: 'var(--fs-xxl)',
    xxxlg: 'var(--fs-xxxl)',
    contentPad: 'var(--content-pad)',
    // cardRad: 'var(--card-rad)',
    nameSize: 'var(--name-size)',
    cardGrid: 'var(--card-grid)',
    aboutGrid: 'var(--about-grid)',
    hoverBg: 'var(--hovbg)',
    link: 'var(--link)',
  },
};
