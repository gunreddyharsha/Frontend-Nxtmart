import './index.css'
import {MdDeleteOutline} from 'react-icons/md'

const EachCartItem = props => {
  const {each, onIncrement, onDecrement, deletecartItems} = props
  const {id, name, weight, price, image, quantity} = each
  const Increment = () => {
    onIncrement(id)
  }
  const Decrement = () => {
    onDecrement(id)
  }
  const delectItems = () => {
    deletecartItems(id)
  }
  return (
    <li>
      <div className="cartList">
        <div className="eachCartItem">
          <img src={image} className="cartImage" alt="image2" />
          <div>
            <h1 className="itemname">{name}</h1>
            <p className="weight">{weight}</p>
            <p className="npriceme">{price}</p>
          </div>
        </div>
        <div className="deleteContainer">
          <div className="quantityCard">
            <button onClick={Decrement} className="incdecButton" type="submit">
              -
            </button>
            <p>{quantity}</p>
            <button onClick={Increment} className="incdecButton" type="submit">
              +
            </button>
          </div>
          <button
            className="deletebutton"
            onClick={delectItems}
            type="button"
            aria-label="Delete"
          >
            <MdDeleteOutline className="deleteIcon" />
          </button>
        </div>
      </div>
      <hr className="horizentalLine" />
    </li>
  )
}
export default EachCartItem
