import Card from "../Card/Card";

// style.css
import "./Header.css";
import "../Card/Card.css";

export default function Header() {
  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">
          <p className="brand-logo">React Context Reducer</p>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>Гид</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
