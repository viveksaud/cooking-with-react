import React, {useState} from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import { v4 as uuidv4 } from 'uuid';
// import uuidv4 from 'uuid/package.json';


function App() {

  const [recipes, setRecipe]=useState(sampleRecipes);

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name:'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {id: uuidv4(),name: 'Name',amount: '1Tbs'}
      ]
      };  

      setRecipe([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id){
    setRecipe(recipes.filter(recipe => recipe.id !== id))

  }

  return (
    <div>
      <RecipeList 
        recipes={recipes}
        handleRecipeAdd={handleRecipeAdd}
        handleRecipeDelete={handleRecipeDelete}
      />
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name:'Plain Chicken',
    cookTime: '1:45',
    servings: 3,
    instructions: '1. Put salt on chicken \n2. Put chicken in oven \n3. Eat chicken',
    ingredients: [
      {
        id:1,
        name:'Chicken',
        amount: '1 pound'
      },
      {
        id:2,
        name:'salt',
        amount: '2 spoon'
      }
    ],
  },
  {
    id: 2,
    name:'Plain Pork',
    cookTime: '0:45',
    servings: 5,
    instructions: '1. Put paprika on pork \n2. Put pork in oven \n3. Eat pork',
    ingredients:[
      {
        id:1,
        name:'Pork',
        amount: '3 pound',
      },
      {
        id:2,
        name:'Paprika',
        amount:'3 spoon',
      },
    ],
  }
];

export default App;



