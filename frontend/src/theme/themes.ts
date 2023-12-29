import { switchClasses } from '@mui/material';
import { red } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { Const } from '@/const';

import { Themes } from './types';

// colors have to be MUI pallette safe and used from CSS
// not from the pre processor SCSS vars
// https://mui.com/material-ui/customization/color/
// TODO load from vars in
// The following formats are supported:
// #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
// console.log(Const.css.primaryDark); works
const colors = {
  primary: Const.css.primaryDark, // web picker good
  primaryLight: Const.css.primaryLight, // web picker good
  secondary: Const.css.secondaryDark,
  secondaryLight: Const.css.secondaryLight,
};

const sharedTheme = {
  typography: {
    fontFamily: [
      'Quicksand',
      '"Segoe UI"',
      '"Helvetica Neue"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  spacing: 8,
  palette: {
    // primary: colors.primary, // does not work this way
    background: {
      default: Const.css.primaryLight, //  0b0f19 // 0E1525
      // paper: indigo[900],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.5715,
        },
      },
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontFamily: `"QuickSand", "Helvetica", "Arial", sans-serif`,
            fontWeight: 500,
            // letterSpacing: '.01rem',
            fontSize: '4rem',
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            color: colors.primary,
          },
        },
        {
          props: { variant: 'h5' } /* component props */,
          style: {
            /* your style here: */
            pb: 1,
            fontFamily: `"QuickSand", "Helvetica", "Arial", sans-serif`,
            fontWeight: 500,

            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            color: colors.primary,
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        // colorInherit: {
        //   backgroundColor: '#ff00ff', // works
        // },
        root: {
          zIndex: 2,
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          WebkitBackdropFilter: 'blur(10px)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.1)',

          // background: 'rgba(10, 25, 41, 0.7)',
          // background: 'rgba(255, 255, 255, 0.1)',
          background: Const.css.navbg, // Const.css.navbg,
        },
      },
      defaultProps: {
        color: 'inherit',
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 20,
          marginBottom: 20,
          width: '80%',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          zIndex: 10,
          position: 'fixed',
          color: 'red',
          left: 0,
          gap: -1,
          bottom: 0,
          right: 0,
          WebkitBackdropFilter: 'blur(10px)',
          backdropFilter: 'blur(10px)',
          // background: 'rgba(255, 255, 255, 0.05)',
          borderTopColor: 'ff0000',
          backgroundColor: Const.css.navbg,
          '&.Mui-selected': { color: 'red' },
          '&.Mui-MuiBottomNavigationAction-root': {
            color: red,
            width: '2rem',
          },
        },
      },
    },
  },
} as ThemeOptions; // the reason for this casting is deepmerge return type
// TODO (Ivan): replace mui-utils-deepmerge with lodash or ramda deepmerge
const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      // primary: blue,
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      background: {
        default: '#eaedf2', // Const.css.primaryLight,
        // paper: blue[200],
        //paper: Const.css.uniqueCard, //colors.secondary,
      },
    },
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: colors.primary,
            color: colors.primaryLight,
            paddingLeft: '0.725em',
            paddingRight: '0.725em',
            fontSize: '0.725em !important',
            '& a': {
              color: '#90caf9',
            },
            maxWidth: '700px',
          },
          arrow: {
            color: colors.primary,
          },
          popper: {
            maxWidth: '700px',
          },
        },
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      // primary: indigo,
      // secondary: cyan,
      palette: {
        primary: {
          main: colors.primary,
        },
        secondary: {
          main: colors.secondary,
        },
      },

      background: {
        default: Const.css.primaryDark, //  0b0f19 // 0E1525
        paper: Const.css.primaryDark,
      },
      buttons: {
        primary: {
          fontWeight: 'bold',
          color: 'white',
          bg: 'primary',
          '&:hover': {
            bg: 'dark',
          },
        },
        secondary: {
          fontWeight: 'bold',
          color: 'white',
          bg: 'primary',
          '&:hover': {
            bg: 'dark',
          },
        },
      },
      text: {
        primary: '#fff', //colors.primary,
        // secondary: colors.primary, //grey[300],
        caps: {
          textTransform: 'uppercase',
          letterSpacing: '.2em',
        },
        heading: {
          fontFamily: 'heading',
          fontWeight: 'heading',
          lineHeight: 'heading',
        },
        display: {
          // extends the text.heading styles
          variant: 'text.heading',
          fontSize: [6, 7, 8],
          fontWeight: 'display',
        },
      },
      cards: {
        primary: {
          padding: 2,
          borderRadius: 4,
          boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
        },
      },
    },
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: colors.secondary,
            color: colors.primary,
            paddingLeft: '0.725em',
            paddingRight: '0.725em',
            // fontSize: '0.725em !important',
            // '& a': {
            //   color: '#90caf9',
            // },
            maxWidth: '700px',
          },
          arrow: {
            color: colors.secondary,
          },
          popper: {
            maxWidth: '700px',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            lineHeight: 1.5715,
          },
        },
        variants: [
          {
            props: { variant: 'h1' } /* component props */,
            style: {
              /* your style here: */
              // pb: 1,
              fontFamily: `"QuickSand", "Helvetica", "Arial", sans-serif`,
              fontWeight: 500,
              // letterSpacing: '.01rem',
              fontSize: '4rem',
              fontWeightLight: 300,
              fontWeightRegular: 400,
              fontWeightMedium: 500,
              color: colors.secondary,
            },
          },
          {
            props: { variant: 'h5' } /* component props */,
            style: {
              /* your style here: */
              pb: '60px',
              fontFamily: `"QuickSand", "Helvetica", "Arial", sans-serif`,
              fontWeight: 500,

              fontWeightLight: 300,
              fontWeightRegular: 400,
              fontWeightMedium: 500,
              color: colors.secondary,
            },
          },
        ],
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            [`& .${switchClasses.input}`]: {
              position: 'absolute',
            },
          },
          switchBase: {
            color: 'red',
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid rgba(255, 255, 255, .125)',
            '&.Mui-selected': {
              borderLeft: `5px solid rgba(255, 255, 255, .125)`,
            },
          },
        },
      },
      MuiAccordion: {
        defaultProps: {
          square: true,
          TransitionProps: {
            unmountOnExit: true,
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid rgba(255, 255, 255, .125)',
            minHeight: 56,
            '&.Mui-expanded': {
              minHeight: 56,
            },
          },
          content: {
            alignItems: 'center',
            justifyContent: 'space-between',
            '&.Mui-expanded': {
              margin: '12px 0',
            },
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            backgroundColor: '#212121',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          docked: {
            '& .MuiPaper-root': {
              position: 'static',
            },
          },
          paper: {},
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            backgroundColor: '#121212',
          },
        },
      },
    },
  }),
};

export default themes;
