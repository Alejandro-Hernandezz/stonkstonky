import { createTheme } from '@mui/material/styles';

const darkMintTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4DB6AC',       // Turquesa menta principal
      light: '#82E9DE',      // Mentolado claro
      dark: '#00867D',       // Menta profundo
      contrastText: '#121212'
    },
    secondary: {
      main: '#81C784',       // Verde menta secundario
      light: '#B2FEB7',      // Verde claro
      dark: '#4CAF50'        // Verde oscuro
    },
    background: {
      default: '#121212',    // Fondo oscuro principal
      paper: '#1E1E1E'       // Superficie de tarjetas
    },
    text: {
      primary: '#E0F7FA',    // Texto principal blanco azulado
      secondary: '#B2DFDB'   // Texto secundario menta claro
    },
    success: {
      main: '#4DB6AC',
      contrastText: '#000'
    },
    warning: {
      main: '#FFD54F'
    },
    error: {
      main: '#FF8A65'
    },
    info: {
      main: '#4FC3F7'
    }
  },
  typography: {
    fontFamily: [
      'Inter', 
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      letterSpacing: '-0.5px'
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.25px'
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem'
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem'
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem'
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1a2a2a 0%, #121212 100%)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.3)'
          }
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #4DB6AC 0%, #00867D 100%)',
          boxShadow: '0 4px 10px rgba(77, 182, 172, 0.3)'
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #81C784 0%, #4CAF50 100%)',
          boxShadow: '0 4px 10px rgba(129, 199, 132, 0.3)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1e2a2a 0%, #1a1a1a 100%)',
          border: '1px solid rgba(77, 182, 172, 0.1)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            borderColor: 'rgba(77, 182, 172, 0.3)'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
          backgroundImage: 'none'
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgba(255,255,255,0.1)'
        },
        bar: {
          borderRadius: 5
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255,255,255,0.08)'
        }
      }
    }
  }
});

export default darkMintTheme;