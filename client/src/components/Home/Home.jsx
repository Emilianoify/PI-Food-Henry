import React from "react";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card"
import './Home.css'

export default function Home() {
    return (
        <div className="homeContainer">
           <NavBar />
           <div className="cardContainer">
           <Card/>
           </div>
           
           </div>
           

    );
}