import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeProps } from '../../../Home/Components/CoffeeCard'
import {
  CoffeeImageAndNameContainer,
  CoffeeItemContainer,
  InnerPaddingContainer,
  RemoveButton,
} from './styles'

interface CoffeeItemProps {
  coffee: CoffeeProps
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    replaceItemQuantityFromCart,
  } = useContext(CartContext)

  const [cartItem] = cartItems.filter((item) => item.id === coffee.id)

  function handleUpdateCartItemValue(value: number) {
    if (
      Math.max(value, cartItem.amount) - Math.min(value, cartItem.amount) !==
      1
    ) {
      replaceItemQuantityFromCart({ ...cartItem, amount: value })
    } else {
      const updatedCartItem = {
        ...cartItem,
        amount: 1,
      }
      if (value > cartItem.amount) {
        addItemToCart(updatedCartItem)
      } else if (value < cartItem.amount) {
        removeItemFromCart(updatedCartItem)
      }
    }
  }

  function handleRemoveItem() {
    const updatedCartItem = {
      ...cartItem,
      amount: 0,
    }
    removeItemFromCart(updatedCartItem)
  }

  const image = `/assets/coffees/${coffee.image_name}`

  return (
    <CoffeeItemContainer>
      <InnerPaddingContainer>
        <CoffeeImageAndNameContainer>
          <img src={image} alt="" />
          <div className="title-align">
            <span>{coffee.name}</span>
            <div>
              <QuantityInput
                quantity={cartItem.amount}
                setQuantity={handleUpdateCartItemValue}
              />
              <RemoveButton onClick={handleRemoveItem}>
                <Trash size={16} />
                Remover
              </RemoveButton>
            </div>
          </div>
        </CoffeeImageAndNameContainer>
        <span>R$ {coffee.price.replace('.', ',')}</span>
      </InnerPaddingContainer>
    </CoffeeItemContainer>
  )
}
