import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './Components/CardList'
import CardDetails from './Components/CardDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Components/About'
import CartPage from './Components/CartPage'
import Favourites from './Features/Favourites'
import WishList from './Features/WishList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
     <Route index element={<CardList />}/>
      <Route path='/details' element = {<CardDetails />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/cart' element={<CartPage />}/>
      <Route path='/favourites' element={<Favourites />}/>
      <Route path='/wishlist' element={<WishList />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
