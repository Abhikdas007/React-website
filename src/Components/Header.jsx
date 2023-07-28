import { Link } from "react-router-dom"

function Header() {
  return (
    <nav>
      <h2>TechAbhik.com</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/#about"}>About</Link>
        <Link to={"/#brands"}>Brands</Link>
        <Link to={"/sevices"}>Sevices</Link>
      </div>
    </nav>
  )
}

export default Header
