import { listFactory } from '../factory/list.mjs'

const ingredientListContainer = document.querySelector(
  '.ingredient-list-container'
)
const firstButton = document.querySelector('.first-button')
const ingredientButtonContainer = document.querySelector(
  '.ingredient-button-container'
)

export function displayIngredientList (data) {

  generateIngredients(data)

  let ingredientDisplayValue = window.getComputedStyle(ingredientListContainer)
    .display

  if (ingredientDisplayValue === 'none') {
    openIngredient()
  } else {
    closeIngredient()
  }
}

export function openIngredient () {
  let ingredientDisplayValue = window.getComputedStyle(ingredientListContainer)
    .display
  ingredientListContainer.style.display = 'block'
  firstButton.style.width = '40vw'
  ingredientButtonContainer.style.width = '40vw'
  firstButton.placeholder = 'Rechercher un ingrédient'
}

export function closeIngredient () {
  let ingredientDisplayValue = window.getComputedStyle(ingredientListContainer)
    .display
  ingredientListContainer.style.display = 'none'
  firstButton.style.width = '110px'
  ingredientButtonContainer.style.width = '150px'
  firstButton.placeholder = 'Ingrédients'
}

export function generateIngredients (data) {
  data.forEach(recipe => {
    let listModel = listFactory(recipe)
    let ingredientListModelDOM = listModel.getIngredientListDOM()
    ingredientListContainer.appendChild(ingredientListModelDOM)
  })
}