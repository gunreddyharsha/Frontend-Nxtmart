import './index.css'
import {Link, useNavigate} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import {CiLogout} from 'react-icons/ci'
import { useEffect } from 'react'

const navItems = [
  {id: 1, name: 'Home'},
  {id: 2, name: 'Cart'},
]
const NavItema = props => {
  const {each} = props
  const {name, id} = each
 
  const path = id === 1 ? '/' : '/cart'

  return (
    <Link className="Link" to={path}>
      <li  className={` List`}>
        {name}
      </li>
    </Link>
  )
}

const Header =()=>{
  let navigate=useNavigate()
  const logoutButton = () => {
    Cookies.remove('jwt_token')
     Cookies.remove('email')
    navigate("/login",{replace:true})
  }
  
    return (
      <div className="headerContainer">
        <div className="displaying">
          <img
            src="https://res.cloudinary.com/dnfxrt2xj/image/upload/v1755092123/Logo_2_xn8xet.png"
            className="HeaderIMage"
            alt="image5"
          />
          <div className="display">
            <ul className="unorderListHeaser">
              {navItems.map(each => (
                <NavItema each={each} key={each.id} />
              ))}
            </ul>
            <CiLogout />
            <button
              onClick={logoutButton}
              className="logOutUtton"
              type="submit"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  }

export default (Header)