function saveRecipe(recipeName, recipePage) {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    
    // Check if recipe is already saved
    if (!savedRecipes.find(recipe => recipe.name === recipeName)) {
      savedRecipes.push({ name: recipeName, page: recipePage });
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
      alert('Recipe saved!');
    } else {
      alert('Recipe already saved!');
    }
  }
  
  function loadSavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    const savedRecipesList = document.getElementById('saved-recipes');
    
    if (savedRecipes.length === 0) {
      savedRecipesList.innerHTML = '<p class="ki">No saved recipes.</p>';
    } else {
      savedRecipesList.innerHTML = savedRecipes.map(recipe => 
        `<div class="recipe">
           <h3>${recipe.name}</h3>
           <a href="${recipe.page}">View Recipe</a>
         </div>`
      ).join('');
    }
  }
  // Function to clear all recipes from localStorage
function clearAllRecipes() {
  localStorage.removeItem('savedRecipes');
  loadSavedRecipes(); // Refresh the saved recipes list
}

