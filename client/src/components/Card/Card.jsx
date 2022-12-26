import React from "react";
import c from './Card.module.css'
import { NavLink } from 'react-router-dom';

export default function Card(props) {
    const { id, name, diets, image, healthScore } = props;
    const dietsList = diets?.map((e) => e + " | ")

    return (

        <div className={c.container}>
            <span className={c.title}>{name}Choripan con queso y cebolla</span>
            <div >
                <img className={c.imgContainer} src="https://spoonacular.com/recipeImages/716426-312x231.jpg" alt={name} />
            </div>
            <div className={c.detailContainer}>
                    <span className={c.detailInfo}>Diets: {dietsList}</span>
                    <span className={c.detailInfo}>HealthScore: {healthScore}</span>
                </div>
                <div className={c.linkContainer}>
                    <NavLink to={`recipes/${id}`}>View More</NavLink>
                </div>
        </div>

        // </NavLink>

    )
}

/*<NavLink to={`/recipes/${id}`}>
<div className="cardContainer">
    <div className="imageContainer">
        <img className="imgCard" src={image} alt={name} />
    </div>
    <div className="nameContainer">
        <span className="spanName">{name}</span>
    </div>
    <div className="dietContainer">
        <p className="dietListContainer">{dietsList}</p>
        <p className="healthScoreContainer">HealthScore: {healthScore}</p>
    </div>
</div>
</NavLink>*/