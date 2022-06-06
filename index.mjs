import recipes from './recipes.mjs'
import { cardFactory } from './card.mjs'
import { listFactory } from './list.mjs'

const cards = document.querySelector('.cards')

function showCards() {
  recipes.forEach(recipe => {
    let cardModel = cardFactory(recipe)
    let cardModelDOM = cardModel.getCardDOM()
    cards.appendChild(cardModelDOM)
  })
}

showCards()

const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', event => {
   if (event.target.classList.contains('first-dropdown')) {
    displayIngredientList(recipes)
   }
  })

});



function displayIngredientList (data) {
  const ingredientListContainer = document.querySelector('.ingredient-list-container')
  data.forEach(recipe => {
    let listModel = listFactory(recipe)
    let ingredientListModelDOM = listModel.getIngredientListDOM()
    ingredientListContainer.appendChild(ingredientListModelDOM)
  })

  const firstButton = document.querySelector('.first-button')
  const ingredientButtonContainer = document.querySelector('.ingredient-button-container')

  let ingredientDisplayValue = window.getComputedStyle(ingredientListContainer).display;

  if (ingredientDisplayValue === 'none') {
    ingredientListContainer.style.display = 'block'
    firstButton.style.width = '40vw'
    ingredientButtonContainer.style.width = '40vw'
} else {ingredientListContainer.style.display = 'none'
    firstButton.style.width = '110px'
    ingredientButtonContainer.style.width = '150px'}
}