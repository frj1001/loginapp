import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes() {
    const getData = ()=> {
      return localStorage.getItem('usertoken')      //getting usertoken from localstorage
    }
  return (
    <div>
        {getData()==="true" ? <Outlet /> : <Navigate to={'/login'}/>}      
    </div>
  )
}

export default ProtectedRoutes
