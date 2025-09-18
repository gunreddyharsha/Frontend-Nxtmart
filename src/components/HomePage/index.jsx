import './index.css'
import {useState,useEffect} from 'react'
import Cookies from 'js-cookie'
import { useNavigate} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Products from '../Products'

const categoriesList = [
  {
    id: 1,
    categorieName: 'All',
  },
  {
    id: 2,
    categorieName: 'Fruits & Vegetables',
  },
  {
    id: 3,
    categorieName: 'Cold Drinks & Juices',
  },
  {
    id: 4,
    categorieName: 'Beverages',
  },
  {
    id: 5,
    categorieName: 'Foodgrains, Oil & Masala',
  },
  {
    id: 6,
    categorieName: 'Bakery, Cakes & Dairy',
  },
  {
    id: 7,
    categorieName: 'Snacks & Branded Foods',
  },
  {
    id: 8,
    categorieName: 'Eggs, Meat & Fish',
  },
  {
    id: 9,
    categorieName: 'Gourmet & World Food',
  },
  {
    id: 10,
    categorieName: 'Baby Care',
  },
  {
    id: 11,
    categorieName: 'Cleaning & Household',
  },
  {
    id: 12,
    categorieName: 'Beauty & Hygiene',
  },
  {
    id: 13,
    categorieName: 'Kitchen, Garden & Pets',
  },
  {
    id: 14,
    categorieName: 'Chocolates & Candies',
  },
  {
    id: 15,
    categorieName: 'Dry Fruits',
  },
  {
    id: 16,
    categorieName: 'Indian Mithai',
  },
]
const EachCaterorie = props => {
  const {each, value, clickCategories} = props
  const {id, categorieName} = each
  const stylish = value ? 'newstyle' : ''
  const clickCategoriesList = () => {
    clickCategories(id)
  }
  return (
    <li className={`eachList ${stylish}`} onClick={clickCategoriesList}>
      <a href={`#${categorieName}`} className={`anchorList ${stylish}`}>
        {categorieName}
      </a>
    </li>
  )
}
const HomePage =()=>{
    const [loader,setloader]=useState(false)
    const [allproducts,setAllproducts]=useState([])
    const [failureview,setfailureview]=useState(false)
    const [id,setid]=useState(1)
    const navigate=useNavigate()
   
    useEffect(()=>{
     const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return navigate("/login",{replace:true})
    }
    },[])
    useEffect(()=>{
        const getProducts = async () => {
        
        setloader(true)
        const response = await fetch(
          'https://apis2.ccbp.in/nxt-mart/category-list-details',
        )
        const data = await response.json()
        
        if (response.ok) {
         
          setAllproducts(data.categories)
          setloader(false)
          
        } else {
        
          setfailureview(true)
        }
      }
      getProducts()
    },[])
    const clickCategories = clickid => {
    
    setid(clickid)
  }
    
    return (
      <div id="All">
        <Header />
         {!failureview ? (
          <div className="Homedisplay">
            <div className="categoriesContainer">
              <ul className="unorcerListHomepage">
                {categoriesList.map(each => (
                  <EachCaterorie
                    each={each}
                    key={each.id}
                    clickCategories={clickCategories}
                    value={each.id === id}
                  />
                ))}
              </ul>
            </div>
            <div>
              {loader ? (
                <div className="products-loader-container">
                  <div className="loader-container" data-testid="loader">
                    <Loader
                      type="ThreeDots"
                      color="#263868"
                      height={50}
                      width={50}
                    />
                  </div>
                </div>
              ) : (
                <div className='verticalFlow'>
                  {allproducts.map(each => (
                    <Products each={each} key={each.name} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="failureView">
            <div className="innerfailureContainber">
              <img
                src="https://res.cloudinary.com/dnfxrt2xj/image/upload/v1755611198/Group_7519_vxm4uh.png"
                alt="image6"
              />
              <h1>Oops! Something Went Wrong</h1>
              <p>We are having some trouble.</p>
              <button
                className="RetryButton"
                onClick={this.clickRetrybutton}
                type="submit"
              >
                Retry
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

export default HomePage