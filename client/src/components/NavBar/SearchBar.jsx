import React, { useState } from "react";
import iconSearch from '../../img/iconSearch.png'
import './SearchBar.css'
export default function SearchBar({ onSearch }) {
    const [recipe, setRecipe] = useState("");
    return (
        <form className="searchBar" onSubmit={(e) => {
            e.preventDefault();
            onSearch(prompt("hola"));
        }}>
            <input type="text"
                className="searchInput"
                placeholder="Search Recipe..."
                value={recipe}
                onChange={e => setRecipe(e.target.value)} />
            <button type="submit" className="submitInput"><img src={iconSearch} className="logoSearch"/></button>
        </form>
    )
}