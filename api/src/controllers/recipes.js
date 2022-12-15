const axios = require('axios');
const { Recipe, Diet, conn } = require('../db');
const { API_KEY } = process.env;

const getApiInfo = async (name) => {

  try {
    const axiosRes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    const { results } = axiosRes.data;

    let response = results?.map((e) => {
      return {
        id: e.id,
        name: e.title,
        summary: e.summary,
        image: e.image,
        healthScore: e.healthScore,
        diets: e.diets,
        steps: (e.analyzedInstructions[0] && e.analyzedInstructions[0].steps ? e.analyzedInstructions[0].steps.map(item => item.step).join(" \n") : '')
      }
    })
    return response;

  } catch (error) {
    return ('Cannot get api info');
  }
}

const getDbInfo = async (name) => {
  try {

    let rcp = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ['name']
      }
    })

    let resp = rcp?.map((recipe) => {
      return {
        id: recipe.id,
        name: recipe.name,
        summary: recipe.score,
        healthScore: recipe.healthScore,
        image: recipe.image,
        steps: recipe.steps,
        diets: recipe.diets?.map(diet => diet.name)
      }
    })
    return resp
  } catch (error) {
    return ('Cannot get api info')
  }
}

const getAllInfo = async (name) => {

  let apiInfo = await getApiInfo(name);
  let dbInfo = await getDbInfo(name);
  let totalInfo = apiInfo.concat(dbInfo);
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
      const recipeByApiID = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
      //Mi error fue no traer correctamente los datos, la API fue bien consumida, el problema fue que no use el .data, al invocar.
      return {
        id: recipeByApiID.data.id,
        name: recipeByApiID.data.title,
        summary: recipeByApiID.data.summary,
        image: recipeByApiID.data.image,
        healthScore: recipeByApiID.data.healthScore,
        diets: recipeByApiID.data.diets,
        steps: (recipeByApiID.data.analyzedInstructions[0] && recipeByApiID.data.analyzedInstructions[0].steps ? recipeByApiID.data.analyzedInstructions[0].steps.map(item => item.step).join(" \n") : '')
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

