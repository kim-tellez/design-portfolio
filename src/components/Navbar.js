import React from 'react';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                <div className='container'>
                <a className="navbar-brand" href={"/design-portfolio/"}>kim t&eacute;llez</a>
                    <button className="navbar-toggler" type="button" data-toggle="modal" data-target="#sidebarModal" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item ml-5">
                            <NavLink exact activeClassName="active" className="nav-link" to='/design-portfolio/'>home</NavLink>
                        </li>
                        <li className="nav-item dropdown ml-5">
                            <button type='button' className="nav-link dropdown-toggle btn btn-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            work
                            </button>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink activeClassName="active" className="dropdown-item" to='/design-portfolio/readingful-moments/'>Readingful Moments</NavLink>
                                <NavLink activeClassName="active" className="dropdown-item" to='/design-portfolio/postup/'>PostUp</NavLink>
                            </div>
                        </li>
                        <li className="nav-item ml-5">
                            <NavLink activeClassName="active" className="nav-link" to='/design-portfolio/fun/'>fun</NavLink>
                        </li>
                        <li className="nav-item ml-5">
                            <NavLink activeClassName="active" className="nav-link" to='/design-portfolio/about/'>about</NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container-fluid">
            <div class="modal left fade menu" id="sidebarModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog position-fixed m-auto" role="document">
                    <div class="modal-content h-100">
                        <div class="modal-body p-3">
                            <div class="nav flex-column">
                                <a className="nav-link" href="/">home</a>
                                <button type='button' className="text-left nav-link dropdown-toggle btn btn-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                work
                                </button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/readingful-moments/">Readingful Moments</a>
                                <a className="dropdown-item" href="/postup/">PostUp</a>
                                </div>
                                <a className="nav-link" href="/fun/">fun</a>
                                <a className="nav-link" href="/about/">about</a>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}