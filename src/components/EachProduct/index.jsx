import './index.css'
//import {withRouter} from 'react-router-dom'
import CartContexts from '../../Contexts/CartContexts'

const EachProducts = props => {
  const {each2} = props

  const {id, name, weight, price, image} = each2
  const quantity = 1
  const addtocart = false
  return (
    <CartContexts.Consumer>
      {value => {
        const {addingCardItems, cartItems} = value
        const aadingcardthe = () => {
          addingCardItems({
            id,
            name,
            weight,
            price,
            image,
            quantity,
            addtocart,
          })
        }
        const a = cartItems.filter(each1 => each1.id === id)
        return (
          <li className="EachList">
            <div className="imageCont">
              <img src={image} className="itemInage" alt="image3" />
            </div>

            <div className="eachproductDisplay">
              <div>
                <h1 className="name1">{name}</h1>
                <p className="name2">{weight}</p>
                <p className="name">{price}</p>
              </div>

              <button
                className="addingButton"
                onClick={aadingcardthe}
                type="submit"
              >
                Add
              </button>
            </div>
            {a.length !== 0 && <p className="addedtocart">Added to cart</p>}
          </li>
        )
      }}
    </CartContexts.Consumer>
  )
}
export default (EachProducts)