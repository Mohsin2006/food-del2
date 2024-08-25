import { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import PropTypes from 'prop-types';

import axios from "axios"
const LoginPopup = ({setShowLogin}) => {

  const {url, setToken}=useContext(StoreContext)
    
  const[currentState, setCurrentState]=useState('Login')
  const[data,setData]=useState({
    name:"",
    email:"",
    password:""
  })

  const onchangeHandler=(event)=>{
const name=event.target.name;
const value=event.target.value;
setData(data=>({...data,[name]:value}))
  }

  const onLogin=async(event)=>{
event.preventDefault()
let newUrl=url;
if (currentState==="Login") {
newUrl+="/api/user/login"  
}
else{
  newUrl+="/api/user/register"
}

const response=await axios.post(newUrl,data);
if (response.data.success) {
  setToken(response.data.token);
  localStorage.setItem("token",response.data.token)
  setShowLogin(false)
}
else{
  alert(response.data.message)
}
  }

 
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==='Login'?<></>:<input type="text" name='name' onChange={onchangeHandler} value={data.name} placeholder='Your Name' required />}
            <input name='email'  onChange={onchangeHandler} value={data.email} type="email" placeholder='Your Email' required />
            <input name='password'  onChange={onchangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit' >{currentState==='Sign Up'?'Create Account':'Login'}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing, i agree to the terms and condition & Privacy Policy</p>

        </div>
        {currentState==='Login'
        ?<p>Create a new Accoun ? <span onClick={()=>setCurrentState('Sign Up')}>Click Here</span></p>
        :<p>Already have an Account ? <span onClick={()=>setCurrentState('Login')}>Login here</span> </p>}
      </form>
    </div>
  )
}

LoginPopup.propTypes = {
  setShowLogin: PropTypes.string.isRequired,
  
};

export default LoginPopup
