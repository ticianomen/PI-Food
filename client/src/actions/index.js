export function getRecipes(name) {
    return function(dispatch) {
        if(name){
            return fetch("https://git.heroku.com/food-app-ticiano.git/recipes?name="+name)
                .then(response => response.json())
                .then(json => {
                    dispatch({ type: "GET_RECIPES", payload: json });
                });
        }else{
            return fetch("https://git.heroku.com/food-app-ticiano.git/recipes")
                .then(response => response.json())
                .then(json => {
                    dispatch({ type: "GET_RECIPES", payload: json });
                });
        }
        
    };
}

export function getRecipeDetail(id){
    return function(dispatch) {
        return fetch("https://git.heroku.com/food-app-ticiano.git/recipes/" + id)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_RECIPE_DETAIL", payload: json });
        });
    };
}

export function getDiets(){
    return function(dispatch) {
        return fetch("https://git.heroku.com/food-app-ticiano.git/types")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_DIETS", payload: json });
        });
    };
}

export function postRecipe(data){
    return function(dispatch) {
        return fetch("https://git.heroku.com/food-app-ticiano.git/recipe", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "POST_RECIPE", payload: json });
        });
    };
}

export function orderAlphabetically(data){
    return {type: "ORDER", payload: data}
}
export function orderScore(data){
    return {type: "ORDER_SCORE", payload: data}
}

export function filterDiets(data){
    return {type: "FILTER", payload: data}
}