import { createContext, ReactNode, useState } from 'react';

interface ThemeContextData {
    setDark: () => void;
    isActiveDark: boolean;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [isActiveDark, setIsActiveDark] = useState(false);

    function setDark() {
        if (!isActiveDark) {
            setIsActiveDark(true);
            var body = document.getElementsByTagName('body');
            document.body.style.backgroundColor ="#0D1117";

        } else {
            setIsActiveDark(false);
            var body = document.getElementsByTagName('body');
            document.body.style.backgroundColor ="#f2f3f5";
        }
    }




    return (
        <ThemeContext.Provider
            value={{ setDark, isActiveDark }}
        >
            {children}
        </ThemeContext.Provider>
    );
}