import React from 'react'

const CartContexts = React.createContext({
  cartItems: [],
  headerid: 1,
  onClickHeader: () => {},
  addingCardItems: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
  deletecartItems: () => {},
  paymentdoneButton:()=>{}
})
export default CartContexts
