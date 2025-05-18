import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReactBootstrap from './components/NavbarReactBootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <NavbarReactBootstrap />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Sleep Token Shop' />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria: ' />} />
        <Route path='/category' element={<ItemListContainer greeting='Sleep Token Shop' />} />
      </Routes>



    </BrowserRouter>
  )
}

export default App
