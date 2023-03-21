import { Outlet, Link } from "react-router-dom";

import './Layout.css';

const Layout = () => {
  return (
    <>
      <div className="header">
        <nav className="menu">
          <ul className="menu__list">
            <li>
              <Link to="/">Home</Link>
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

      <Outlet />
    </>
  )
};

export default Layout;