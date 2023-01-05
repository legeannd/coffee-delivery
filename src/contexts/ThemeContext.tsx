import { createContext, ReactNode, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { darkTheme } from '../styles/themes/dark'
import { lightTheme } from '../styles/themes/light'

interface ThemeContextType {
  theme: 'dark' | 'light'
  switchTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

type ThemeType = 'dark' | 'light'

interface ThemeContextProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:theme-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return 'light'
  })

  function switchTheme(): void {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(theme)

    localStorage.setItem('@coffee-delivery:theme-state-1.0.0', stateJSON)
  }, [theme])

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
