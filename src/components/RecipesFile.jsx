import React from 'react'
import './_recipe.scss'

function RecipesFile(props) {
    // console.log(props);
    return (
        <ul className="recipe">
              {props.recipe.map((rec)=>
              <li className="recipe__list">
               <p className="recipe__label"> {rec.recipe.label} </p> 
               <img src={rec.recipe.image} className="recipe__image" alt=""/>  
               <div className="recipe__ingredientlist">
               <p className="recipe__heading">Ingredients</p>
               <p className="recipe__ingredient">{rec.recipe.ingredientLines}</p></div>
             </li>
             
             )}
            
        </ul>
    )
}

export default RecipesFile;