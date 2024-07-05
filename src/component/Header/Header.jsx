import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header({ title = "To Do List" }) {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <NavBar />
    </header>
  );
}

export default Header;
