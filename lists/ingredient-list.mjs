import { listFactory } from "../factory/list.mjs"

export function displayIngredientList (data) {
  const ingredientListContainer = document.querySelector(
    '.ingredient-list-container'
  )
  data.forEach(recipe => {
    let listModel = listFactory(recipe)
    let ingredientListModelDOM = listModel.getIngredientListDOM()
    ingredientListContainer.appendChild(ingredientListModelDOM)
  })

  const firstButton = document.querySelector('.first-button')
  const ingredientButtonContainer = document.querySelector(
    '.ingredient-button-container'
  )

  let ingredientDisplayValue = window.getComputedStyle(ingredientListContainer)
    .display

  if (ingredientDisplayValue === 'none') {
    ingredientListContainer.style.display = 'block'
    firstButton.style.width = '40vw'
    ingredientButtonContainer.style.width = '40vw'
  } else {
    ingredientListContainer.style.display = 'none'
    firstButton.style.width = '110px'
    ingredientButtonContainer.style.width = '150px'
  }
}