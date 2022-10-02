import React from 'react'
import Ingredient from './Ingredient'
import RecipeIngredientEdit from './RecipeIngredientEdit'


export default function RecipeEdit() {
  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-button-container'>
            <button className='btn recipe-edit__remove-button'>&times;</button>
        </div>
        <div className='recipe-edit__details-grid'>
            <label 
                htmlFor='name' 
                className='recipe-edit__label'>
                Name
            </label>
            <input 
                type='text'
                className='recipe-edit__input' 
                name='name' 
                id='name' />
            <label 
                htmlFor='cooktime'
                className='recipe-edit__label'>
                Cook Time
            </label>
            <input 
                type='text' 
                className='recipe-edit__input'
                name='cooktime' 
                id='cooktime' />
            <label 
                htmlFor='servings'
                className='recipe-edit__label'>
                Servings
            </label>
            <input 
                type='number' 
                className='recipe-edit__input'
                min='1' 
                name='Servings'
                id='Servings' />
            <label 
                htmlFor='instructions'
                className='recipe-edit__label'>
                Instructions
            </label>
            <textarea 
                name='instructions'
                className='recipe-edit__input'
                id='instructions' />
        </div>
        <br />
        <label className='recipe-edit__label'>Ingredients</label>
        <div className='recipe-edit__ingredient-grid'>
            <div>Name</div>  
            <div>Amount</div>
            <div></div>
            <RecipeIngredientEdit />
            <RecipeIngredientEdit />
        </div>
        <div className='recipe-edit__add-ingredient-btn-container'>
            <button className='btn btn--primary'>Add Ingredient</button>
        </div>
    </div>
  )
}
