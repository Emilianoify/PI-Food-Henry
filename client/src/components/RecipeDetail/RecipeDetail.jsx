import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail, pageDetail } from '../../redux/actions/index';
import './RecipeDetail.css'

export default function RecipeDetail(props) {

    const id = props.match.params.id;
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getRecipeDetail(id))
        return () => {
            dispatch(pageDetail())
        }
    }, [dispatch])

    const recipeDetail = useSelector((state) => state.recipeDetail)
    const dietsList = recipeDetail.diets?.map((e) => e + " | ")
    return (
        <div className="detail-container">
            {console.log(recipeDetail.steps)}
            <div className="recipe-detail-container">
                <div className="firstDetailsContainer">
                    <section className="imgDetailContainer">
                        <img src={recipeDetail.image} alt="recipeImage" className="recipeImgBg" />
                    </section>
                    <section className="details-container">
                        <p className="recipeDetailName">{recipeDetail.name}</p>
                        <p className="recipeDetailHealthScore">HealthScore: {recipeDetail.healthScore}</p>
                        <p className="recipeDetailDiets">Diets Types: {dietsList}</p>
                        <button className="backToHome" onClick={() => history.goBack()}>Back to Home</button>
                    </section>
                </div>
                <div className="secondDetailsContainer">
                    <p className="recipeDetailSummary" dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}></p>
                    {recipeDetail.steps?.map((el)=>{
                        return (
                            <p key={el.number}>{el.number + ")" + el.step}</p>
                        )
                    })}
                </div>

            </div>
        </div>

    )
}

