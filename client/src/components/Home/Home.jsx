import React from "react";
import NavBar from "../NavBar/NavBar";
import './Home.css'
import Recipes from "../Cards/Recipes";

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