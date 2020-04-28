import { createMuiTheme } from '@material-ui/core/styles';
// import buttonOverrides from './default/overrides/button';
import buttonGroupOverrides from './default/overrides/buttonGroup';
import stepConnectorOverrides from './default/overrides/stepConnector';
import typographyOverrides from './default/overrides/typography';
import textFieldOverrides from './default/overrides/textField';
import modalOverrides from './default/overrides/modal';

let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // '@font-face': [raleway],
      }
    }
  },
  palette: {
    primary: {
      main: '#3D8BFF',
      lite: '#F2FBFD'
    },
    secondary: {
      main: '#5ED291',
      light: '#EDF7EE'
    },
    text: {
      default: '#000',
      white: '#fff',
      grey: '#838383',
      blackGray: '#4B4B4B',
      highlight: '#3d8bff',
      danger: '#f70000',
      red: '#E23D3D',
      green: '#0B6623'
    },
    background: {
      default: '#fff',
      blue: '#3D8BFF',// custom
      liteBlue: '#DDF5FA',// custom
      liteGreen: '#EDF7EE',// custom
      grey: '#F0EFEF'// custom
    },
    app: {
      backgroundLightBlue: '#F2FBFD',
      inputBoxBorderColor: '#ced4da',
      lightGray: '#e2e8f0',
      lightestGray: '#f9f9f9',
      darkGray: '#888',
      inputField: '#7c7c7c',
      cardShadow: '#c7c7c7',
      backgroundLightestBlue: '#f8faf1'
    },
    rgba: {
      blackShadow: 'rgb(0, 0, 0, 0.16)',
      footerBlack: 'rgba(33, 37, 41, 1)',
      secondaryBlack: 'rgba(0, 0, 0, 0.54)',
      boxShadow: 'rgba(0, 0, 0, 0.36)'
    },
    layout: 'rgba(93, 93, 93, .5)'
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  spaceSizes: {
    px: '0.0625rem', // 1px
    s0: '0.125rem', // 2px
    s1: '0.25rem', // 4px
    s2: '0.5rem', // 8px
    s3: '0.75rem', // 12px
    s4: '1rem', // 16px
    s5: '1.25rem', // 20px
    s6: '1.5rem', // 24px
    s7: '1.75rem', // 28px
    s8: '2rem', // 32px
    s10: '2.5rem', // 40px
    s12: '3rem', // 48px
    s14: '3.5rem', // 56px
    s16: '4rem', // 64px
    s20: '5rem', // 80px
    s24: '6rem', // 96px
    s28: '7rem', //112px
    s32: '8rem', // 128px
    s40: '10rem', // 160px
    s48: '12rem', // 192px
    s56: '14rem', // 224px
    s64: '16rem', // 256px
    s72: '18rem' //288px
  },
  typography: {
    fontSizes: {
      s10: '0.625rem',
      s12: '0.75rem',
      s13: '0.8125rem', //custom 0.8125‬rem
      s14: '0.875rem',
      s15: '0.9375rem',
      s16: '1rem',
      s19: '1.1875rem',
      s20: '1.25rem',
      s21: '1.3125rem',
      s22: '1.375rem',// custom
      s24: '1.5rem',
      s28: '1.75rem',// custom
      s30: '1.875rem',
      s32: '2rem',
      s36: '2.25rem',
      s44: '2.75rem',
      s50: '3.125rem‬'
    },
    fontFamily: [
      '"Open Sans"',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});
theme = {
  ...theme,
  overrides: {
    // MuiButton: buttonOverrides(theme),
    MuiButtonGroup: buttonGroupOverrides(theme),
    MuiStepConnector: stepConnectorOverrides(theme),
    MuiInputBase: textFieldOverrides(theme),
    MuiDialog: modalOverrides(theme)
  }
};

theme.typography['h1'] = {
  fontFamily: 'Muli',
  fontSize: '3.125rem', // 50px
  fontWeight: 800,
  lineHeight: 1.2
};

theme.typography['h3'] = {
  fontFamily: 'Open Sans',
  fontSize: '1.875rem', // 30px
  fontWeight: 800,
  lineHeight: 1.2
};

theme.typography['subtitle1'] = {
  fontFamily: 'Montserrat',
  fontSize: '1.375rem', // 22px
  fontWeight: 700,
  lineHeight: 1.2
};

theme.typography['subtitle2'] = {
  fontFamily: 'Open Sans',
  fontSize: '1.25rem', // 20px
  fontWeight: 800,
  lineHeight: 1.2
};

theme.typography['h2'] = Object.assign(
  theme.typography['h2'],
  typographyOverrides(theme).h2
);
// theme.typography['h3'] = Object.assign(
//   theme.typography['h3'],
//   typographyOverrides(theme).h3
// );
theme.typography['h4'] = Object.assign(
  theme.typography['h4'],
  typographyOverrides(theme).h4
);
theme.typography['h5'] = Object.assign(
  theme.typography['h5'],
  typographyOverrides(theme).h5
);
theme.typography['h6'] = Object.assign(
  theme.typography['h6'],
  typographyOverrides(theme).h6
);
// theme.typography['subtitle2'] = Object.assign(
//   theme.typography['subtitle2'],
//   typographyOverrides(theme).subtitle2
// );
theme.typography['caption'] = Object.assign(
  theme.typography['caption'],
  typographyOverrides(theme).caption
);

export default theme;
