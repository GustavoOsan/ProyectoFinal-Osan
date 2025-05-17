import '../css/Navbar.css'
import Cart from './Cart'

const Navbar = () => {
    return (
        <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", backgroundColor: "grey"}}>
            <a className="Nav-link" href="">
                <img className="logo" src='../sleep-token-logo.png' alt='logo' />
            </a>
            <a className="Nav-link" href="">Records</a>
            <a className="Nav-link" href="">Merch</a>
            <a className="Nav-link" href="">Clothes</a>
            <Cart/>      
        </nav>
    )
}

export default Navbar
