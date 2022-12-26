import React, { useState } from "react";
import { createRecipe } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import './CreateRecipe.css';

export default function CreateRecipe() {

    const listDiets = useSelector((state) => state.diets);
    //const list = listDiets.map((e) => { e.name });
    const dispatch = useDispatch();
    const history = useHistory();
    const [input, setInput] = useState({
        name: '',
        healthScore: '1',
        summary: '',
        steps: '',
        image: 'https://imgur.com/a/YXzJtzi',
        diets: []
    })
    const [validName, setValidName] = useState(true);
    const [validSummary, setValidSummary] = useState(true);
    const [validSteps, setValidSteps] = useState(true);
    const myRegex = {
        name: /^\s/g
    };
    return (
        <div className="fullContainer">
            <div className="createContainer">
                <section className="imgContainer">
                </section>
                <section className="formContainer">
                    <form action="" className="createForm" autoComplete="false">
                        <label htmlFor="foodName">Name:</label>
                        <input type="text" name="foodName" id="foodName" />
                        <label htmlFor="foodImage">Image URL:</label>
                        <input type="url" name="foodImage" id="foodImage" />
                        <label htmlFor="foodHealthScore">Health Score:</label>
                        <input type="number" name="foodHealthScore" id="foodHealthScore" />
                        <label htmlFor="foodSummary">Summary:</label>
                        <input type="text" name="foodSummary" id="foodSummary" />
                        <label htmlFor="foodSteps">Steps:</label>
                        <input type="text" name="foodSteps" id="foodSteps"></input>
                        <label htmlFor="foodDiet">Diet type:</label>
                        <select name="foodDiet" id="foodDiet">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <button type="submit">Create Recipe</button>
                        <button type="button" onClick={()=>{history.goBack()}}>Back</button>
                    </form>
                </section>
            </div>
        </div>
    );
}