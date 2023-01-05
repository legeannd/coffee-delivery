import { createContext, ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { darkTheme } from '../styles/themes/dark'
import { defaultTheme } from '../styles/themes/light'

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
  const [theme, setTheme] = useState<ThemeType>('light')

  function switchTheme(): void {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const currentTheme = theme === 'light' ? defaultTheme : darkTheme

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
