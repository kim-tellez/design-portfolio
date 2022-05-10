import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar sticky-top navbar-expand-lg navbar-light'>
          <div className='container'>
      <a className="navbar-brand" href={"/design-portfolio/"}>kim t&eacute;llez</a>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'navbar-nav nav-menu'}>
          <li className='nav-item'>
            <NavLink to={"/design-portfolio/"} exact activeClassName="active" className='nav-link' onClick={closeMobileMenu}>
              home
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <button type='button' className="nav-link btn-clr dropdown-toggle btn btn-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                work
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink activeClassName="active" className="dropdown-item" to={"/design-portfolio/readingful-moments/"} onClick={closeMobileMenu}>Readingful Moments</NavLink>
                <NavLink activeClassName="active" className="dropdown-item" to={"/design-portfolio/postup/"} onClick={closeMobileMenu}>PostUp</NavLink>
            </div>
          </li>
          <li className='nav-item'>
            <NavLink
              to={"/design-portfolio/fun/"}
              className='nav-link'
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              fun
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to={"/design-portfolio/about/"}
              className='nav-link'
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              about
            </NavLink>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;