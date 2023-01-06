import { AddressData, CartItem } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  REPLACE_ITEM_QUANTITY_FROM_CART = 'REPLACE_ITEM_QUANTITY_FROM_CART',
  EMPTY_CART_ACTION = 'EMPTY_CART_ACTION',
  SET_CURRENT_ADDRESS = 'SET_CURRENT_ADDRESS',
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

export function emptyCartAction() {
  return {
    type: ActionTypes.EMPTY_CART_ACTION,
  }
}

export function setCurrentAddressAction(item: AddressData) {
  return {
    type: ActionTypes.SET_CURRENT_ADDRESS,
    payload: {
      item,
    },
  }
}
