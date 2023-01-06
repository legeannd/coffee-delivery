import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
      </ThemeContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
