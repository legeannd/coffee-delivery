import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import { ThemeContextProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
