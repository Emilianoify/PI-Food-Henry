import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { filterByDiets, getDietsList, orderByHealth, orderByRecipe } from "../../redux/actions/index"
import './ToolBar.css'

export default function ToolBar({ setOrder, setCurrentPage }) {

    const dispatch = useDispatch();
    const dietList = useSelector((state) => state.dietList);
    const diestByName = dietList?.map((el) => el.name);
    useEffect(() => {
        dispatch(getDietsList());
    }, [dispatch])



    const handleChange = (e) => {
        if (e.target.value === "A-z" || e.target.value === 'Z-a') {
            dispatch(orderByRecipe(e.target.value))
            setOrder(e.target.value)
            setCurrentPage(1)
        } else {
            dispatch(orderByHealth(e.target.value))
            setOrder(e.target.value)
            setCurrentPage(1)
        }
    }

    const handleChangeDiets = (e) => {
        dispatch(filterByDiets(e.target.value));
        setCurrentPage(1);
    }


    return (
        <div className="toolbar">
            <div className="orderContainer">
                <span>Order By:</span>
                <select onChange={(e) => handleChange(e)} defaultValue="Order By:" className="selectMain">
                    <option value="default" disabled>Order By:</option>
                    <option value="A-z">A-z</option>
                    <option value="Z-a">Z-a</option>
                    <option value="L-H">Lower</option>
                    <option value="H-L">Higher</option>
                </select>
            </div>
            <div>
                <button onClick={() => window.location.reload()} className="reset">
                    Reload Recipes
                </button>
            </div>
            <div className="filterContainer">
                <span>Filter Diets:</span>
                <select onChange={(e) => handleChangeDiets(e)} className="selectMain">
                    <option value="allDiets">All Diets</option>
                    {diestByName?.map((el) => {
                        return (
                            <option value={el} key={el}>{el}</option>
                        )

                    })}
                </select>
            </div>
        </div>
    )
}
