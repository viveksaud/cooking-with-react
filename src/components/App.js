import React, {useState,createContext} from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import "../css/app.css";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
// import uuidv4 from 'uuid/package.json';

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {

  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes]=useState(sampleRecipes);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);
  

  useEffect(()=> {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes));
  },[recipes])

  
  const recipeContextValue={
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name:'',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {id: uuidv4(),name: '',amount: ''}
      ]
      };  

      setSelectedRecipeId(newRecipe.id);
      setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id){
    if(selectedRecipeId != null && selectedRecipeId ===id){
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))

  }

  return (
    <>
    <RecipeContext.Provider value={recipeContextValue}>
      <div>
      <RecipeList 
        recipes={recipes}
        // handleRecipeAdd={handleRecipeAdd}
        // handleRecipeDelete={handleRecipeDelete}
      />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
      </div>
    </RecipeContext.Provider>
    
    
    </>
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
