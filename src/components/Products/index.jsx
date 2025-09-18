import './index.css'
import EachProduct from '../EachProduct'

const Products = props => {
  const {each} = props
  const {name, products} = each

  return (
    <div id={name}>
      <h1 className="eachName">{name}</h1>
      <div className="horizantalFlow">
        <ul className="productsUnorderList">
          {products.map(each2 => (
            <EachProduct each2={each2} categorie={name} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Products