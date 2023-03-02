import React, { createContext, useState, useContext, ReactNode } from "react";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

type UseContextThemeProps = {
  children: ReactNode;
};

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}
interface ITheme {
  title: string;

  colors: {
    primary: string;
    secundary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<UseContextThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(dark);

  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
