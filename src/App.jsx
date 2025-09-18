import React,{ useState,useEffect } from 'react'
//import './App.css'

import {BrowserRouter , Router, Routes, Route} from 'react-router-dom'
import axios from "axios";
import './App.css'
import {Component} from 'react'
import CartContexts from './Contexts/CartContexts'
import Loginpage from './components/Loginpage'
import HomePage from './components/HomePage'
import Cart from './components/Cart'
import PaymentSection from './components/PaymentSection'


const App=()=> {
 
 //state = {cartItems: [], headerid: 1}
  const [cartItems,setCartItems]=useState([])
  const [headerid,setHeaderId]=useState(1)
  const paymentdoneButton=()=>{
    setCartItems([])
    setHeaderId(1)
  }
  const onClickHeader = id1 => {
    //this.setState({headerid: id1})
    setHeaderId(id1)
  }

  const addingCardItems = item => {
    const {id} = item
    
    const product = cartItems.find(each => each.id === id)
    if (product) {
      setCartItems(prevs => 
         prevs.map(each => {
          if (each.id === product.id) {
            const qua = product.quantity + item.quantity
            return {...each, quantity: qua, addtocart: true}
          }
          return each
        }),
      )
    } else {
      setCartItems(prevs => 
         [...prevs, {...item, addtocart: true}],
      )
    }
  }

  const onIncrement = id => {
    console.log('HI')
    setCartItems(prevs => 
      prevs.map(each => {
        if (each.id === id) {
          const qua = each.quantity + 1
          return {...each, quantity: qua}
        }
        return each
      }),
    )
  }

 const onDecrement = id => {
    setCartItems(prevs => 
      prevs.map(each => {
        if (each.id === id && each.quantity > 1) {
          const qua = each.quantity - 1
          return {...each, quantity: qua}
        }
        return each
      }),
    )
  }

  const deletecartItems = id => {

    const updateCartList = cartItems.filter(each => each.id !== id)
    setCartItems(updateCartList)
  }
    
    // console.log(this.calculateTotalPrice)
    return (
         <CartContexts.Provider
        value={{
          cartItems,
          headerid,
          addingCardItems: addingCardItems,
          onIncrement: onIncrement,
          onDecrement: onDecrement,
          onClickHeader: onClickHeader,
          deletecartItems: deletecartItems,
          paymentdoneButton:paymentdoneButton
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/login" element={<Loginpage/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentSection/>} />
          </Routes>
        </BrowserRouter>
    </CartContexts.Provider>
    )
  }

export default App