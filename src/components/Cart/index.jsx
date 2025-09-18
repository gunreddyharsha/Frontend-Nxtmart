import {Component} from 'react'
import Header from '../Header'
import EachCartItem from '../EachCartItem'
import CartContexts from '../../Contexts/CartContexts'
import './index.css'
import { useNavigate } from 'react-router-dom'

const Cart=()=>  {
    const navigate=useNavigate()
  const chechoutButton = () => {
    
    navigate("/payment",{replace:true})

  }
    return (
      <CartContexts.Consumer>
        {value => {
          const {cartItems, onIncrement, onDecrement, deletecartItems,} = value
          const amount = cartItems.reduce((total, item) => {
  const price = Number(item.price.toString().replace(/[^\d.-]/g, ""));
  return total + price * item.quantity;
}, 0);


          return (
            <div>
              <Header />
              {cartItems.length !== 0 ? (
                <div className="cartContainer">
                  <h1>Items</h1>
                  <div className="border">
                    <ul className="cartunorderList">
                      {cartItems.map(each => (
                        <EachCartItem
                          each={each}
                          key={each.id}
                          onIncrement={onIncrement}
                          onDecrement={onDecrement}
                          deletecartItems={deletecartItems}
                        />
                      ))}
                      <li className="totlaAmount">
                        <p>
                          Total ({cartItems.length} items):₹ {amount}
                        </p>
                        <button
                          className="cartButton"
                          onClick={chechoutButton}
                          type="submit"
                        >
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="emptyCartbg">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dnfxrt2xj/image/upload/v1755409374/Logo_yrizdx.png"
                      className="emptyCart"
                      alt="image1"
                    />
                    <p>Your cart is empty</p>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </CartContexts.Consumer>
    )
  }


export default Cart