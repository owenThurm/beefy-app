import { container } from 'assets/jss/material-kit-pro-react.js';

const appStyle = theme => ({
  '@global': {
    'html,body': {
      background: theme.palette.background.app,
    },
  },
  page: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    ...container,
    zIndex: 1,
  },
  children: {
    minHeight: '77vh',
  },
});

export default appStyle;
