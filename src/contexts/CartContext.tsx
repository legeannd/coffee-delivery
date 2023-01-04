import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToCartAction,
  removeItemFromCartAction,
} from '../reducers/cart/actions'
import { CartItem, cartReducer } from '../reducers/cart/reducer'

interface CreateCartItemData {
  id: string
  amount: number
}

interface CartContextType {
  cartItems: CartItem[]
  addItemToCart: (cartItem: CreateCartItemData) => void
  removeItemFromCart: (cartItem: CreateCartItemData) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [],
  })

  const { cartItems } = cartState

  function addItemToCart(data: CreateCartItemData) {
    console.log(data)
    dispatch(addItemToCartAction(data))
  }

  function removeItemFromCart(data: CreateCartItemData) {
    dispatch(removeItemFromCartAction(data))
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
