import { createContext, useEffect, useState } from "react"

export const themes = {
    light: {
        color: "#0f0f0f",
        backgroundColor: "#ededee",
        primary: "#D4AF37",
        secondary: "#239bd7"
    },
    dark: {
        color: "#ededee",
        backgroundColor: "#0f0f0f",
        primary: "#D4AF37",
        secondary: "#239bd7",
    }
}

type Theme = {
    light: {
        color: "#0f0f0f",
        backgroundColor: "#ededee",
        primary: "#D4AF37",
        secondary: "#239bd7"
    },
    dark: {
        color: "#ededee",
        backgroundColor: "#0f0f0f",
        primary: "#D4AF37",
        secondary: "#239bd7",
    }
}

type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

type ThemeProviderProps = {
    children: React.ReactNode
}

const localTheme = JSON.parse(localStorage.getItem("savedTheme") || "")

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(localTheme)

    useEffect(() => {
        localStorage.setItem("savedTheme", JSON.stringify(theme))
    }, [theme])

    return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}