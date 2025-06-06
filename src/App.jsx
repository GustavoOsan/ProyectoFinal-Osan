import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReactBootstrap from './components/NavbarReactBootstrap'
import NotFound from './components/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartProvider}from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavbarReactBootstrap />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Sleep Token Shop' />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria: ' />} />
        <Route path='/category' element={<ItemListContainer greeting='Sleep Token Shop' />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App

