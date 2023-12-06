import { ReactNode } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import { useCustomSelector } from '@/hooks/reduxHooks';

interface ThemeConfigProps {
  children: ReactNode;
}

const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const themeMode = useCustomSelector((state) => state.settings.themeMode);

  const theme = createTheme({
    palette: {
      primary: {
        light: '#5FAD41',
        main: '#BFAE48',
        dark: '#00072D'
      },
      secondary: {
        light: '#2D936C',
        main: '#391463',
        dark: '#001C55'
      },
      background: {
        default: themeMode === 'light' ? '#5FAD41' : '#2D936C'
      },
      mode: themeMode
    },
    typography: {
      fontFamily: 'Lexend, sans-serif'
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '500px'
          },
          sizeMedium: {
            height: 40
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '500px'
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
