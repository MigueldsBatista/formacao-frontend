import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    // <Link to="/">Home</Link>
    // <br />
    // <Link to="/contact">Contatos</Link>
    <div>
    <NavLink to="/" className={({isActive})=>(isActive?"active":"")}>Home</NavLink>
    <NavLink to="/contact" className={({isActive})=>(isActive?"active":"")}>Contatos</NavLink>
    <br />
    </div>
  )
}

export default Navbar