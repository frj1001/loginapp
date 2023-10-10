import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

function Login() {
  const checklogin = localStorage.getItem('usertoken')
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
  
  const handleSubmit = (event)=> {
    event.preventDefault();
    
    if(username==="farhaj" && password==="farhaj123"){      //hardcoding user credentials for login
      localStorage.setItem('usertoken', 'true')             //saving user set flag in localstorage
      navigate('/products')
    }else{
      setError("Your username or password is incorrect! Try again")
    }

    setUsername('')
    setPassword('')
  }


  if(checklogin==="false" || checklogin===null){
    return (
      <div className='main-login'>
        <div className='login'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' value={username} onChange={(event)=>{setUsername(event.target.value)
            console.log(username)}} required />
            <input type="password" placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)} required />
            <button type='submit'>Signin</button>
            <div className='error'>{error}</div>
          </form>
        </div>
      </div>
    )
  }else {
    return(
      <Navigate to={'/'}/>        //If someone directly passes login route in address bar while loggedin then redirect to home otherwise show login form
    )
  }
}

export default Login
