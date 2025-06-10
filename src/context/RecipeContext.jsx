import { createContext, useState } from "react";
import Recipe from "../models/Recipe"; // Import class

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);

  // Fetch data when the context is initialized
  const fetchData = async () => {
    try {
      const recipes = await Recipe.readAllData(); // Use class method to fetch data
      setdata(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // Fetch data by category or ID
  const fetchDataByCategory = async (category) => {
    try {
      const recipes = await Recipe.readDataByCategory(category); // Use class method to fetch data by category
      setdata(recipes);
    } catch (error) {
      console.error(`Error fetching recipes for category ${category}:`, error);
    }
  }
  // Fetch data by ID
  const fetchDataById = async (id) => {
    try {
      const recipe = await Recipe.readDataById(id); // Use class method to fetch data by ID
      setdata([recipe]); // Set data as an array with a single recipe
    } catch (error) {
      console.error(`Error fetching recipe with ID ${id}:`, error);
    }
  };
    return (
      <recipecontext.Provider value={{ data, setdata, fetchData, fetchDataByCategory, fetchDataById }}>
        {props.children}
      </recipecontext.Provider>
    );
};

export default RecipeContext;
