import React from 'react'
import  IngredientList  from './IngredientList';

export default function Recipe(props) {
    const {
        id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients,
        handleRecipeDelete
    }=props;//export default function Recipe({name,cookTime,servings,instructions}) {
  return (
    <div className='recipe'>
        <div className='recipe__header'>
            <h3 className='recipe__title'>{name}</h3>
            <div>
                <button className='btn btn--primary mr-1'>Edit</button>
                <button 
                    className='btn btn--danger'
                    onClick={()=> handleRecipeDelete(id)}
                >
                    Delete
                </button>
            </div>   
        </div>
        <div className='recipe_row'>
            <div> 
                <span className='recipe_label'>Cook Time: </span>
                <span className='recipe_value'>{cookTime}</span>
            </div>
            <div className='recipe_row'>
                <span className='recipe_label'>Servings: </span>
                <span className='recipe_value'>{servings}</span>
            </div>
            <div className='recipe_row'>
                <span className='recipe_label'>Instructions:</span>
                <div className='recipe_value recipe_value--indented recipe_instructions'>
                    {instructions}
                </div>
            </div>
            <div className='recipe_row'>
                <span className='recipe_label'>Ingredients:</span>
                <div className='recipe_value recipe_value--indented'>
                   <IngredientList ingredients={ingredients}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}
