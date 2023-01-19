import React, { useEffect, useState } from "react";
import { getRecipes } from '../../redux/actions/index'
import './Recipes.css'
import Paginate from "../Paginate/Paginate";
import { useDispatch, useSelector } from 'react-redux'
import Recipe from "../Card/Recipe";
import loadingImg from "../../img/loadingGIF2.gif"
import ToolBar from "../ToolBar/ToolBar";

export default function Cards() {

    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes)
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
    const allRecipesPage = currentPage * postsPerPage;
    const indexOfFirstPost = allRecipesPage - postsPerPage;
    const currentPosts = recipes.slice(indexOfFirstPost, allRecipesPage);
    const totalPages = Math.ceil(recipes.length / postsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const [, setOrder] = useState('');

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);

    return recipes.length > 0 && recipes !== undefined ? (
        <>
            <div className="toolbarBox">
                <ToolBar
                    setOrder={setOrder}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <div className="home-container">
                <div className={currentPage !== totalPages || currentPosts?.length >= 3 ? "cardsContainer" : "LastCardContainer"}>
                    {currentPosts?.map((r) => {
                        return (
                            <Recipe
                                id={r.id}
                                name={r.name}
                                diets={r.diets}
                                image={r.image}
                                healthScore={r.healthScore}
                                key={r.id}
                            />
                        )

                    })}
                </div>
            </div>
            <div className="paginateRecipes">
                <Paginate
                    currentPage={currentPage}
                    paginate={paginate}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />
            </div>

        </>
    ) : (
        <>
            <div className="toolbarBox">
                <ToolBar
                    setOrder={setOrder}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <div className="loading">
                <img className="loadingGif" src={loadingImg} alt="Loading gif"></img>
            </div>
        </>
    )

}