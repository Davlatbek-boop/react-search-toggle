import React from 'react'
import Users from './pages/Users'
import Products from './pages/Products'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SingleUser from './pages/SingleUser'
import Posts from './pages/Posts'
import SinglePosts from './pages/SinglePosts'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/users/:id' element={<SingleUser/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/posts/:id' element={<SinglePosts/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App