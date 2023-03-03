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
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSavedBrownser = localStorage.getItem("@my-wallet-app:theme");

    if (themeSavedBrownser) {
      return JSON.parse(themeSavedBrownser);
    } else {
      return light;
    }
  });

  const toggleTheme = () => {
    if (theme.title === "light") {
      setTheme(dark);
      localStorage.setItem("@my-wallet-app:theme", JSON.stringify(dark));
    } else {
      setTheme(light);
      localStorage.setItem("@my-wallet-app:theme", JSON.stringify(light));
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
