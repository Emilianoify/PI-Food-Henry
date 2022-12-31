import React from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../../img/iconHome.png';
import './Navbar.css'
import SearchBar from "./SearchBar";

export default function NavBar({ onSearch }) {
    return (
        <nav className="navbar">
            <NavLink exact to="/home">
               <img className="logoLink" src={Logo} alt="Logo" />
            </NavLink>
            <SearchBar/>
            <NavLink exact to="/create">
                <span>
                    Add Recipe
                </span>

            </NavLink>
        </nav>
    )
}