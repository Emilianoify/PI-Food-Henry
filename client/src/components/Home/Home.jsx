import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import './Home.css'
import Recipes from "../Cards/Recipes";
import Paginate from "../Paginate/Paginate";

export default function Home() {
     return (
        <div className="homeContainer">
            <header>
            <NavBar />
            </header>
            <main className="recipes-container"> 
                <Recipes />
            </main>

        </div>
    );
}