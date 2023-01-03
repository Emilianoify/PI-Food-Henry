import React from "react";
import c from './Recipe.module.css'
import { NavLink } from 'react-router-dom';

export default function Recipe({ id, name, diets, image, healthScore }) {

    const dietsList = diets?.map((e) => e + " | ")

 

    return (
        <div className={c.container}>
            <span className={c.title}>{name}</span>
           
            <div >
                <img className={c.imgContainer} src={image} alt={name} />
            </div>
            <div className={c.detailContainer}>
                    <span className={c.detailInfo}>Diets: {dietsList}</span>
                    <span className={c.detailInfo}>HealthScore: {healthScore}</span>
                </div>
                <div className={c.linkContainer}>
                    <NavLink to={`recipe/${id}`}>View Recipe</NavLink>
                </div>
                
        </div>


    )
}