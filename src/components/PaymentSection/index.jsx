import './index.css'
import Header from '../Header'
import { useNavigate } from 'react-router-dom'
import CartContexts from '../../Contexts/CartContexts'
const PaymentSection = props => {
  
  const navigate=useNavigate()
 
  return (
   <CartContexts.Consumer>
  {value=>{
    const {paymentdoneButton}=value
  
    const returnButton = () => {
    navigate("/",{replace:true})
    paymentdoneButton()
  }
return (
    <div>
      <Header />
      <div className="paymenSectionContainer">
        <div className="innerPaymentsectiion">
          <div className="tickcontainer">
            <img
              src="https://res.cloudinary.com/dnfxrt2xj/image/upload/v1755614685/Vector_st85ib.png"
              alt="image8"
            />
          </div>
          <h1>Payment Successfull</h1>
          <p>Thank You for Ordering</p>
          <p>Your payment is Successfullt completes</p>
          <button className="returnButton" onClick={returnButton} type="submit">
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  )}}
  </CartContexts.Consumer>
  )
  
  
}
export default PaymentSection