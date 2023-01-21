import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { getRecipeByName } from '../../redux/actions/index'
import iconSearch from '../../img/iconSearch.png'
import './SearchBar.css'
export default function SearchBar({ setCurrentPage }) {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("")
    const [isLoading, setLoaded] = useState(false)

    const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length < 3) {
            alert("Please write a valid ingredient o food type")
        } else {
            dispatch(getRecipeByName(search));
            setSearch("");
            setCurrentPage(1)
            
        }
    }

    const regexWhite = /^\s+$/

    const [validSearch, setValidSearch] = useState(true)
    function validateSearch() {
        if (regexWhite.test(search)) {
            setValidSearch(false)
        } else {
            setValidSearch(true)
        }
    }

    return (
        <>
        <form className="searchBar" autoComplete="off" onSubmit={(e) => { handleSubmit(e) }}>
            <input type="text"
                name="search"
                className="searchInput"
                placeholder="Search Recipe..."
                value={search}
                onChange={(e) => { handleChange(e) }}
                onBlur={() => { validateSearch() }} />
                <span className="error-message">{!validSearch && 'Only valid characters'}</span>
                <button type="submit" disabled={!validSearch} className="submitInput">
                <img src={iconSearch} className="logoSearch" alt="SearchLogo" />
            </button>
        </form>
        </>
    )
}