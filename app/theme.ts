import { createMuiTheme } from '@material-ui/core/styles'

const values:any = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1440,
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00AAE4',
    },
    secondary: {
      main: '#00AAE4',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      text: {
        // Some CSS
        color: 'white',
        background: '#00AAE4',
        borderRadius: 8,
      },
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (key: any) => {
        const value = values[key]
        return `@media (min-width:${value}px)`
    },
},
  props: {
    // Name of the component
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    
    },
    MuiAccordion: {
      elevation: 0,
    },
    MuiCard: {
      elevation: 0,
    },
  },
})
export default theme
