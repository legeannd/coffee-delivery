import produce from 'immer'
import { ActionTypes } from './actions'

export interface CartItem {
  id: string
  amount: number
}

interface CartState {
  cartItems: CartItem[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.item.id,
      )
      return produce(state, (draft) => {
        if (cartItemIndex < 0) {
          draft.cartItems.push(action.payload.item)
        } else {
          draft.cartItems[cartItemIndex].amount += action.payload.item.amount
        }
      })
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.item.id,
      )
      return produce(state, (draft) => {
        const isCartValueLowerThanPayload =
          draft.cartItems[cartItemIndex].amount - action.payload.item.amount <=
          0
        if (isCartValueLowerThanPayload || action.payload.item.amount <= 0) {
          draft.cartItems.splice(cartItemIndex, 1)
        } else {
          draft.cartItems[cartItemIndex].amount -= action.payload.item.amount
        }
      })
    }
    default: {
      return state
    }
  }
}
