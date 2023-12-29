import React from 'react';

const styles: Record<string, React.CSSProperties> = {
  root: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
};

const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export type Theme = {
  name: string;
  color: string;
};

export const lightTheme: Theme = {
  color: '#fff',
  name: 'light',
};

export const darkTheme: Theme = {
  color: '#000',
  name: 'dark',
};

const ThemeContext = React.createContext<Theme>(darkTheme);

export const invertBg = (color: string) => (color === lightTheme.color ? darkTheme.color : lightTheme.color);

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>(lightTheme);
  const toggle = React.useCallback(() => {
    setTheme((prev) => {
      if (prev.name === 'light') {
        return darkTheme;
      }
      return lightTheme;
    });
  }, []);
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ ...styles.root, backgroundColor: theme.color }}>
        <button onClick={toggle}>toggle theme</button>
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);

  if (!theme) {
    throw new Error('useTheme must be used within a theme provider');
  }

  return theme;
};

export const ThemedH1 = ({ text }: { text: string }) => {
  const { color } = useTheme();
  return (
    <h1
      style={{
        textTransform: 'capitalize',
        display: 'flex',
        justifyContent: 'center',
        color: invertBg(color),
        textAlign: 'center',
      }}
    >
      {text}
    </h1>
  );
};

// import React from 'react';

// import { useTheme as useT } from 'next-themes';

// const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// export const useTheme = (): {
//   theme: 'light' | 'dark';
//   toggleTheme: () => void;
// } => {
//   const [isMounted, setIsMounted] = React.useState(false);
//   React.useEffect(() => setIsMounted(true), []);
//   const { theme, setTheme } = useT();
//   const toggleTheme = () => {
//     const prev = theme === 'system' ? getSystemTheme() : theme;
//     setTheme(prev === 'light' ? 'dark' : 'light');
//   };

//   if (!isMounted || !theme) {
//     return { theme: 'light', toggleTheme };
//   }

//   if (theme === 'system') {
//     return { theme: getSystemTheme(), toggleTheme };
//   }

//   return { theme: theme as 'light' | 'dark', toggleTheme };
// };
