import '../css/Navbar.css'
import Cart from './Cart'

const Navbar = () => {
    return (
        <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", backgroundColor: "grey"}}>
            <a className="Navegador" href="">
                <img className="logo" src='../sleep-token-logo.png' alt='logo' />
            </a>
            <a className="Navegador" href="">Discos</a>
            <a className="Navegador" href="">Merch</a>
            <a className="Navegador" href="">Clothes</a>
            <Cart/>      
        </nav>
    )
}

export default Navbar
