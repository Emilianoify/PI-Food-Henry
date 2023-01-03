import React, { useEffect, useState } from "react";
import { createRecipe, getDietsList } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import './CreateRecipe.css';

export default function CreateRecipe() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [input, setInput] = useState({
        name: '',
        healthScore: '1',
        summary: '',
        steps: '',
        image: 'https://static.bonviveur.es/tags/recetas-cocina-internacional.jpg',
        diets: []
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.name) {
            alert("Enter a valid name please")
        } else {
            dispatch(createRecipe({ ...input, steps: [{ number: '', step: input.steps }] }))
            alert('Recipe Created')
            history.push("/home")
        }

    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleChangeDiets = (e)=>{
        if(e.target.checked){
            setInput({...input, diets:[...input.diets,e.target.value] })
        }
        if(!e.target.checked){
            setInput({...input, diets: input.diets.filter((d) => d !== e.target.value)})
        }
    }

    useEffect(() => {
        dispatch(getDietsList());
    }, [dispatch])

    const listDiets = useSelector((state) => state.dietList);
    const list = listDiets?.map((e) => e.name);

    return (
        <div className="fullContainer">
            <div className="createContainer">
                <section className="imgContainer">
                </section>
                <section className="formContainer">
                    <form className="createForm" autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} />
                        <label htmlFor="image">Image URL:</label>
                        <input type="url" name="image" value={input.image} onChange={(e) => handleChange(e)} />
                        <label htmlFor="healthScore">Health Score:</label>
                        <input type="number" name="healthScore" min={1} max={100} value={input.healthScore} onChange={(e) => handleChange(e)} />
                        <label htmlFor="summary">Summary:</label>
                        <textarea type="text" name="summary" className="summaryInputCreate" value={input.summary} onChange={(e) => handleChange(e)} rows="3" cols="30" />
                        <label htmlFor="steps">Steps:</label>
                        <textarea type="text" className="stepsInputCreate" name="steps" value={input.steps} onChange={(e) => handleChange(e)} rows="3" cols="30" />
                        <div className="dietsContainerCreate">
                        {list?.map((el) =>
                        (
                            
                                <span key={el}>
                                    <input type="checkbox" name="diets" className="dietListOpt" value={el} onChange={(e)=> handleChangeDiets(e)} />
                                    <label>{el}</label>
                                </span>
                            
                        ))}
                        </div>
                        <button type="submit" className="createRecipe">Create Recipe</button>
                        <button type="button" className="goBackHome" onClick={() => { history.goBack() }}>Back</button>
                    </form>
                </section>
            </div>
        </div>
    );
}