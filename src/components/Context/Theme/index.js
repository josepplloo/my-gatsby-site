import { createContext, useState } from 'react'

export const themes = {
  light: {
    foreground: 'rebeccapurple',
    background: 'white'
  },
  dark: {
    foreground: 'white',
    background: 'rebeccapurple'
  }
};
export const ThemeContext = createContext();

export const useThemes = () => {
  const [mode, setMode] = useState(themes.light);

  const toggleMode = () => { 
    if (mode === themes.light) {
      setMode(themes.dark);
    } else {
      setMode(themes.light);
    }
  };

  return [mode, toggleMode]
};
