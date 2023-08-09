import { Outlet, Link } from "react-router-dom";

import logo from '../../resources/img/bg/globe.png'
import './Layout.css';

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__body">
            <Link to="/"><img src={logo} alt="logo" className="header__logo"/></Link>
            <nav className="menu">
              <ul className="menu__list">
                <li>
                  <Link to="/start">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  )
};

export default Layout;