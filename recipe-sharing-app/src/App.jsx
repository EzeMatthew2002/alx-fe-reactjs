import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import './App.css'

function App() {
  

  return (
    <>
     <RecipeList/>
     <AddRecipeForm/>
    </>
  )
}

export default App
