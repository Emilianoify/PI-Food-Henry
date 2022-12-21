import React from "react";
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className="box">
            <div className="container">
                <h1 className="welcomeMessage">Hello, welcome to my Project</h1>
                <span className="loveMessage">What you want cooking today?</span>
                <button className="homeRedirect"><Link to="/home">Find Recipes</Link></button>
            </div>
        </div>

    );
}