import React, { createContext, useContext, useEffect, useState } from 'react';
import themes from '../services/colorChoices';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {

  const [theme, setTheme] = useState();
  const [selectedTheme, setSelectedTheme] = useState('light');

  const colorMap = {
    light: themes.light,
    dark: themes.dark
  };

  useEffect(() => {
    setTheme(colorMap[selectedTheme]);
  }, [selectedTheme]);

  return (
    <ColorContext.Provider value={{ theme, setSelectedTheme, colorMap }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ColorContext);
  return theme;
};

export const useSetSelectedTheme = () => {
  const { setSelectedTheme } = useContext(ColorContext);
  return setSelectedTheme;
};

export const useAvailableThemes = () => {
  const { colorMap } = useContext(ColorContext);
  return Object.keys(colorMap);
};
