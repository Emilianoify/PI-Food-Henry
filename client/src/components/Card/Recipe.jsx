import React from "react";
import c from './Recipe.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deteleRecipe } from '../../redux/actions'

export default function Recipe({ id, name, diets, image, healthScore }) {
    
    const dispatch = useDispatch();

    const dietsList = diets?.map((e) => e + " | ")

    function recipeDelete(){
        dispatch(deteleRecipe(id))
    }

    return (
        <div className={c.container}>
            <span className={c.title}>{name}</span>
            <button className={c.deleteRecipe} onClick={recipeDelete}>X</button>
            <div >
                <img className={c.imgContainer} src={image} alt={name} />
            </div>
            <div className={c.detailContainer}>
                    <span className={c.detailInfo}>Diets: {dietsList}</span>
                    <span className={c.detailInfo}>HealthScore: {healthScore}</span>
                </div>
                <div className={c.linkContainer}>
                    <NavLink to={`recipe/${id}`}>View More</NavLink>
                </div>
                
        </div>


    )
}