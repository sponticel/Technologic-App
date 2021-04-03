import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/users'

import Home from './screens/Home/Home'
import Products from './screens/Products/Products'
import ProductCreate from './screens/ProductCreate/ProductCreate'
import ProductEdit from './screens/ProductEdit/ProductEdit'
import ProductDetail from './screens/ProductDetail/ProductDetail'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'

import './App.css'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)

  return (
    <div className="app">
    </div>
  )
}

export default App