import { CoffeeCartProps } from './reducer'

interface AddCoffeeProps {
  newCoffee: CoffeeCartProps
  amount: number
}

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  UPDATED_COFFEE = 'UPDATED_COFFEE',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export function addCoffeeToCartAction({ newCoffee, amount }: AddCoffeeProps) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      newCoffee,
      amount,
    },
  }
}

export function updatedCoffeeAction(coffeeId: number, amount: number) {
  return {
    type: ActionTypes.UPDATED_COFFEE,
    payload: {
      coffeeId,
      amount,
    },
  }
}

export function removeCoffeeFromCartAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function clearCoffeeFromCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
