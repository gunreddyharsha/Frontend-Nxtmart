import './index.css'
import {Component} from 'react'
import {CgProfile} from 'react-icons/cg'
import {RiLock2Line} from 'react-icons/ri'
import {useState,useEffect} from "react"
import Cookies from 'js-cookie'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

//import {Redirect} from 'react-router-dom'

function LoginPage(){
   const [name, setinput] = useState("")
  const [password,changepassword]=useState("")
    const [email,setEmail]=useState("")
  const [registraction ,setregistraction]=useState(true)
 
  const navigate=useNavigate()
   const [verifiedmessage,setverifiedmessage]=useState("")
   const [verifiedregisterMessage,setverifiedregisterMessage]=useState("")
   const [noemail,setnoEmail]=useState(false)
   const [nopassword,setNoPassword]=useState(false)
   const [nouername,setnoUsername]=useState(false)
   //const [registraction,setregistreactio]=useState(false)
   const [showpassword,setshowpassword]=useState(false)

   
  const changeUsername=(event)=>{
   console.log(event.target.value)
    setinput(event.target.value)
  }
   const changePasswordfunction=(event)=>{
    console.log(event.target.value)
    changepassword(event.target.value)
  }
  const changeEmail=(event)=>{
    setEmail(event.target.value)
  }
  const submittingform= async (event)=>{
    event.preventDefault()
   
    const userData = {
    email: email,       // check variable names
    password: password
  };
   
  const res = await axios.post("https://backend-nxtmart-2.onrender.com/login", userData,{
  headers: { "Content-Type": "application/json" }
}); 
  
    console.log(res.data.token)
    console.log(res.data.ok)
    console.log(res)
    if(res.data.ok){    
      console.log("harsha")
      Cookies.set("jwt_token",res.data.token)
  
      Cookies.set("email",userData.email)
      navigate("/",{replace:true})
    }
    else {
      console.log(res.data.message)
      setverifiedmessage(res.data.message)
    }
    }
    
   const signuptheUser=async (event)=>{
    event.preventDefault()
    const userData = {
    email: email,       // check variable names
    password: password,
    username:name
  };
  const data = await axios.post("https://backend-nxtmart-2.onrender.com/register",userData,{
  headers: { "Content-Type": "application/json" }
});
console.log(data)
        if(data.data.ok){
         console.log(data.data.message)
         setverifiedregisterMessage(data.data.message)
        }
        else{
           console.log(data.data.message)
            setverifiedregisterMessage(data.data.message)
        }    
   }
   const registractionBUtton=()=>{
   setregistraction(false)
   setverifiedmessage("")
   setEmail("")
   setinput("")
   changepassword("")
   setshowpassword(false)
   }

   const backtoLoginBUtton=()=>{
   setregistraction(true)
   setverifiedregisterMessage("")
   setEmail("")
   setinput("")
   changepassword("")
   setshowpassword(false)
   }

  const noemailData=()=>{
     if (email===""){
      setnoEmail(true)
     }
     else{
      setnoEmail(false)
     }
  }
  const noPasswordData=()=>{
    if (password===""){
      setNoPassword(true)
     }
     else{
      setNoPassword(false)
     }
  }
  const   noUsernameData=()=>{
    if (name===""){
      setnoUsername(true)
    }else{
      setnoUsername(false)
    }
  }
  const clickShowpassword=()=>{
    console.log(showpassword)
    setshowpassword(prevs=>!prevs)
   }

  const emaiistyle=noemail?"emaiistyle":""
  const passwordStyling=nopassword?"emaiistyle":""
  const usernameStyle=nouername?"emaiistyle":""
  return (
        <div className="loginBackground">
          <div className="innerContaober">
            <div>
           <img
              src="https://res.cloudinary.com/dnfxrt2xj/image/upload/v1755092123/Logo_2_xn8xet.png"
              className="loginPageimage"
              alt="image7"
            />
            </div>
            {registraction?
            <div>

              <form onSubmit={submittingform}>
              <label htmlFor="Email">Email</label>
              <br />
              <div className={`inputContainer ${emaiistyle}`}>
                <CgProfile />
                <input
                  className="input"
                  type="text"
                  value={email}
                  id="Email"
                  onChange={changeEmail}
                  onBlur={noemailData}
                />
              </div>
              <label htmlFor="password1">Password</label>
              <br />
              <div className={`inputContainer ${passwordStyling}`}>
                <RiLock2Line />
                <input
                  className="input"
                  type={!showpassword?"password":"text"}
                  id="password1"
                  value={password}

                  onChange={changePasswordfunction}
                  onBlur={noPasswordData}
                />
              </div>
              <div className="showpasswordContainer">
                <input
                  type="checkbox"
                  id="password"
                  onClick={clickShowpassword}
                />
                <label className="para" htmlFor="password">
                  Show Password
                </label>
              </div>
               <button className="button" type="submit">
                Login
              </button>
            </form>
            
            </div>:<form onSubmit={signuptheUser}>               
              <label htmlFor="usernmae">Username</label>
              <br />
              <div className={`inputContainer ${usernameStyle}`}>              
                <input
                  className="input"
                  type="text"
                  id="username"
                  value={name}
                  onChange={changeUsername}
                  onBlur={noUsernameData}
                />              
              <br />          
              </div>         
              <label htmlFor="Email">Email</label>
              <br />
              <div className={`inputContainer ${emaiistyle}`}>            
                <input
                  className="input"
                  type="text"
                  id="Email"
                  value={email}
                  onChange={changeEmail}
                   onBlur={noemailData}
                />
                </div>           
              <label htmlFor="password1">Password</label>
              <br />
              <div className={`inputContainer ${passwordStyling}`}>          
                <input
                  className="input"
                  value={password}
                  id="password1"

                  type={!showpassword?"password":"text"}
                  onChange={changePasswordfunction}
                  onBlur={noPasswordData}
                />
              </div>           
              <div className="showpasswordContainer">
                <input
                  type="checkbox"
                  id="password"   
                  onClick={clickShowpassword}
                />
                <label className="para" htmlFor="password">
                  Show Password
                </label>
              </div>
             <button className="button" type="submit" >
                sign up 
              </button>
              </form>}
             {registraction?<button className="button" type="submit" onClick={registractionBUtton}>
                Register
              </button>:<button className="button" type="submit" onClick={backtoLoginBUtton}>
                back to login 
              </button>}
              
             {verifiedmessage.length!==0&&<p>{verifiedmessage}</p>}
             {verifiedregisterMessage.length!==0&&  <p>{verifiedregisterMessage}</p>}
           
              
              
              
          </div>
        </div>
      )
  }

export default LoginPage