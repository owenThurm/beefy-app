import { createTheme } from '@material-ui/core/styles';

const LIGHT_GRADIENT = 'linear-gradient(to top right, #c96571d4 0%, #4e7d97 83%)';
const DARK_GRADIENT =
  'linear-gradient(to right top, #141e30, #121b2f, #10182e, #0f152c, #0f122b, #1a1833, #261d3b, #332242, #503254, #6f4365 85%, #8e5574, #ae6882)';

const createThemeMode = isNightMode =>
  createTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        app: isNightMode ? LIGHT_GRADIENT : DARK_GRADIENT,
        default: isNightMode ? 'transparent' : 'transparent',
        cta: isNightMode ? '#2B2A3D' : '#2B2A3D',
        paper: isNightMode ? '#606077' : '#606077',
        primary: isNightMode ? '#505067' : '#505067',
        extra: isNightMode ? '#242332' : '#242332',
        dark: isNightMode ? '#2B2A3D' : '#2B2A3D',
        paused: isNightMode ? '#2B2A5A' : '#2B2A5A',
        retired: isNightMode ? '#d32f2f' : '#d32f2f',
        hover: isNightMode ? '#2B2A3D' : '#2B2A3D',
        border: isNightMode ? '#2B2A3D' : '#2B2A3D',
        overlay: isNightMode ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.75)',
      },
      primary: {
        main: isNightMode ? '#fff' : '#fff',
      },
      secondary: {
        main: isNightMode ? '#fff' : '#fff',
      },
      text: {
        primary: isNightMode ? '#fff' : '#fff',
        secondary: isNightMode ? '#B0B0DD' : '#B0B0DD',
      },
    },
    overrides: {
      MuiButton: {
        label: {
          color: isNightMode ? '#fff' : '#fff',
        },
      },
      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? '#fff' : '#fff',
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? '#fff' : '#fff',
        },
        colorSecondary: {
          color: isNightMode ? '#fff' : '#fff',
        },
      },
      borderRadius: '8px',
    },
  });

export default createThemeMode;
