import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/news">News</Link>
    </nav>
  );
}

export default NavBar;
