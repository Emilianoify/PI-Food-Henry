const axios = require('axios');
const { Recipe, Diet } = require('../db');
const API_KEY_2 = process.env.API_KEY_2

const getApiInfo = async (next) => {

  try {
    const axiosRes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_2}&addRecipeInformation=true&number=100`);
    const { results } = axiosRes.data;

    let response = await results?.map((e) => {
      return {
        id: e.id,
        name: e.title,
        summary: e.summary,
        image: e.image,
        healthScore: e.healthScore,
        diets: e.diets,
        steps: e.analyzedInstructions[0]?.steps.map((el) => {
          return {
            number: el.number,
            step: el.step
          }
        }),
      }
    })
    return response;

  } catch (error) {
      return ("Cannot get API Info")
  }
}

const getDbInfo = async (next) => {
  try {

    const recipeFind = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ['name']
      }
    })

    const recipeFilter = recipeFind.map((recipe) => {
      return {
        id: recipe.id,
        name: recipe.name,
        summary: recipe.score,
        healthScore: recipe.healthScore,
        image: recipe.image,
        diets: recipe.diets.map((diet) => diet.name),
        steps: recipe.steps
      }
    })
    return recipeFilter
  } catch (error) {
    next(error);
  }
}

const getAllInfo = async (next) => {

  const apiInfo = await getApiInfo(next);
  const dbInfo = await getDbInfo(next);
  const totalInfo = apiInfo.concat(dbInfo);
  return totalInfo

}

const getRecipeById = async (id) => {

  if (id.length > 15) {
    try {
      const resultFind = await Recipe.findByPk(id, {
        include: {
          model: Diet,
          attributes: ['name']
        }
      })
      return {
        name: resultFind.name,
        summary: resultFind.summary,
        healthScore: resultFind.healthScore,
        diets: resultFind.diets?.map((e) => e.name),
        steps: resultFind.steps,
        image: resultFind.image
      }
    } catch (error) {
      return {
        name: 'Recipe id not found',
        image: 'https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg'
      }
    }
  } else {

    try {
      const recipeByApiID = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY_2}`)
      //Mi error fue no traer correctamente los datos, la API fue bien consumida, el problema fue que no use el .data, al invocar.

      return {
        id: recipeByApiID.data.id,
        name: recipeByApiID.data.title,
        summary: recipeByApiID.data.summary,
        image: recipeByApiID.data.image,
        healthScore: recipeByApiID.data.healthScore,
        diets: recipeByApiID.data.diets,
        steps: recipeByApiID.data.analyzedInstructions[0]?.steps.map((e) => {
          return {
            number: e.number,
            step: e.step
          }
        }),
      }
    } catch (error) {
      return {
        name: 'Recipe id not found',
        image: 'https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg'
      }
    }

  }
}



module.exports = {
  getAllInfo,
  getRecipeById
}

