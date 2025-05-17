import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  console.log('App')

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Sleep Token Shop'} />
      <ItemDetailContainer />
    </>
  )
}

export default App
