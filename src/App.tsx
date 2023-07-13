import { GlobalStyle } from "./styles/global"
import { AppRoutes } from "./routes"
import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "styled-components"
import light from "./styles/themes/light"
import { createContext, useState, useEffect } from "react"

export const ToggleContext = createContext({} as React.Dispatch<React.SetStateAction<DefaultTheme>>)

const localTheme = JSON.parse(localStorage.getItem("savedTheme") || "") 

function App() {
  const [theme, setTheme] = useState(localTheme || light)

  useEffect(() => {
    localStorage.setItem("savedTheme", JSON.stringify(theme))
}, [theme])

  return (
    <>
      <ThemeProvider theme={theme}>
       <ToggleContext.Provider value={setTheme}>
        <GlobalStyle />
        <AppRoutes/>
      </ToggleContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App

