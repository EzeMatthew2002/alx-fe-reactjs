import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  

  return (
    <>
    <SearchBar/>
     <RecipeList/>
     <AddRecipeForm/>
    </>
  )
}

export default App
