import React from 'react'
import Users from './pages/Users'
import Products from './pages/Products'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './components/Home'
import SingleUser from './pages/SingleUser'
import Posts from './pages/Posts'
import SinglePosts from './pages/SinglePosts'
import StopWatch from './pages/StopWatch'
const App = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App