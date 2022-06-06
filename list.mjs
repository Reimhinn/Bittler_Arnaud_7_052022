export function listFactory (data) {
  const {
    appliance,
    description,
    ingredients,
    name,
    servings,
    time,
    ustensils
  } = data

  function getIngredientListDOM () {
    let ingredientList = document.querySelector('.ingredient-list')
    ingredients.forEach(ingredientObject => {
      let ingredientListElement = document.createElement('li')
      ingredientListElement.textContent += ingredientObject.ingredient
      console.log(ingredientListElement)
      ingredientList.appendChild(ingredientListElement)
    })

    return ingredientList
  }

  return { ...data, getIngredientListDOM }
}
