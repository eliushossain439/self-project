import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Nav = () => {
    const { user, logOut } = useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-warning name ps-5" to="/">ELIUS</NavLink>
                <div className=" collapse navbar-collapse" id="navbarNav">
                    < ul className="navbar - nav ms-auto pe-5">
                        < NavLink className="navigation" to="/home" > Home</NavLink >
                        <NavLink className="navigation" to="/about">About</NavLink>
                        <NavLink className="navigation" to="/course">Course</NavLink>
                        <NavLink className="navigation" to="/signIn">Sign-in</NavLink>
                        <NavLink className="navigation" to="/signUp">Sign-up</NavLink>

                    </ul >
                    <span className='me-1'>{user.displayName} </span>
                    {user?.email && <button
                        className='btn btn-info'
                        onClick={logOut}>log-out</button>}
                </div >
            </div >
        </nav >


    );
};

export default Nav;