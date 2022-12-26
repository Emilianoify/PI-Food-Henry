//Importamos axios para consumir el back
import axios from 'axios'
//Exportamos las accion type
export const GET_RECIPES = "GET_RECIPES" //Listo
export const GET_RECIPE_NAME = "GET_RECIPE_NAME" //Listo
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL" //Listo
export const DELETE_RECIPE = "DELETE_RECIPE" //Listo
export const CREATE_RECIPE = "CREATE_RECIPE" // Listo
export const GET_LIST_DIETS = "GET_LIST_DIETS" // Listo
export const ORDER_RECIPES = "ORDER_RECIPES" //Listo
export const ORDER_BY_HEALTHSCORE = "ORDER_BY_HEALTHSCORE" //Listo
export const FILTER_DIETS = "FILTER_DIETS" //Listo
export const DETAIL_PAGE = "DETAIL_PAGE" //Listo

//Creamos las funciones para cada type y las exportamos para posteriormente usarlas en react.
export function getRecipes() {
    return async function (dispatch) {
        await axios
            .get(`http://localhost:3001/recipes`)
            .then((response) => {
                dispatch({ type: GET_RECIPES, payload: response.data })
                alert(response.data)
            })
            .catch((error) => {
                alert(error)
            })
    }
}

export function getRecipeByName(name) {
    return async function (dispatch) {
        try {
            const axiosResponse = await axios
                .get(`http://localhost:3001/recipes?name=${name}`)
                
            dispatch({ type: GET_RECIPE_NAME, payload: axiosResponse.data })
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            }
        }
    }
}

export function getRecipeDetail(id) {
    return async function (dispatch) {
        try {
            const response = await axios
                .get(`http://localhost:3001/recipes/${id}`)
            dispatch({ type: GET_RECIPE_DETAIL, payload: response.data })
        } catch (error) {
            alert(error)
        }
    }
}

export function deteleRecipe(id) {
    return async function (dispatch) {
        try {
            const response = await axios
                .delete(`http://localhost:3001/recipes/${id}`);
            dispatch({ type: DELETE_RECIPE, payload: response.data })
        } catch (error) {
            alert(error)
        }
    }
}

export function createRecipe(data) {
    return async function (dispatch) {
        try {
            const response = await axios
                .post(`http://localhost:3001/recipes`, data)
            dispatch({ type: CREATE_RECIPE, payload: response.data })
        } catch (error) {
            alert(error)
        }
    }
}

export function getDietsList() {
    return function (dispatch) {
        return axios
            .get(`http://localhost:3001/diets`)
            .then((response) => {
                dispatch({ type: GET_LIST_DIETS, payload: response })
            })
            .catch((error) => {
                alert(error)
            })
    }
}

export function orderByRecipe(data) {
    return {
        type: ORDER_RECIPES,
        payload: data
    }
}

export function orderByHealth(data) {
    return {
        type: ORDER_RECIPES,
        payload: data
    }
}

export function filterByDiets(data) {
    return {
        type: FILTER_DIETS,
        payload: data
    }
}

export function pageDetail(data = {}) {
    return {
        type: DETAIL_PAGE,
        payload: data
    }
}