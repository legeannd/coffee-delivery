import { CartItem } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  REPLACE_ITEM_QUANTITY_FROM_CART = 'REPLACE_ITEM_QUANTITY_FROM_CART',
}

export function addItemToCartAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  }
}

export function removeItemFromCartAction(item: CartItem) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      item,
    },
  }
}

export function replaceItemQuantityFromCartAction(item: CartItem) {
  return {
    type: ActionTypes.REPLACE_ITEM_QUANTITY_FROM_CART,
    payload: {
      item,
    },
  }
}
