import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addItemToCartAction,
  emptyCartAction,
  removeItemFromCartAction,
  replaceItemQuantityFromCartAction,
  setCurrentAddressAction,
} from '../reducers/cart/actions'
import { AddressData, CartItem, cartReducer } from '../reducers/cart/reducer'

interface CreateCartItemData {
  id: string
  amount: number
}

interface CartContextType {
  cartItems: CartItem[]
  address: AddressData
  addItemToCart: (cartItem: CreateCartItemData) => void
  removeItemFromCart: (cartItem: CreateCartItemData) => void
  replaceItemQuantityFromCart: (cartItem: CreateCartItemData) => void
  emptyCart: () => void
  setCurrentAddress: (address: AddressData) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartItems: [],
      address: {
        bairro: '',
        cep: '',
        complemento: '',
        localidade: '',
        logradouro: '',
        uf: '',
      },
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        cartItems: [],
        address: {
          bairro: '',
          cep: '',
          complemento: '',
          localidade: '',
          logradouro: '',
          uf: '',
        },
      }
    },
  )

  const { cartItems, address } = cartState

  function addItemToCart(data: CreateCartItemData) {
    dispatch(addItemToCartAction(data))
  }

  function removeItemFromCart(data: CreateCartItemData) {
    dispatch(removeItemFromCartAction(data))
  }

  function replaceItemQuantityFromCart(data: CreateCartItemData) {
    dispatch(replaceItemQuantityFromCartAction(data))
  }

  function emptyCart() {
    dispatch(emptyCartAction())
  }

  function setCurrentAddress(data: AddressData) {
    dispatch(setCurrentAddressAction(data))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        address,
        addItemToCart,
        removeItemFromCart,
        replaceItemQuantityFromCart,
        emptyCart,
        setCurrentAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
