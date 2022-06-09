import recipes from './recipes.mjs'
import { cardFactory } from './factory/card.mjs'
import { listFactory } from './factory/list.mjs'
import { displayIngredientList } from './lists/ingredient-list.mjs'
import { displayDeviceList } from './lists/device-list.mjs'

const cards = document.querySelector('.cards')

function showCards () {
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
    else if (event.target.classList.contains('second-dropdown')){
      displayDeviceList(recipes)
    }
  })
})

document.querySelectorAll('.dropdown-arrow').forEach(arrow => {
  arrow.addEventListener('click', event => {
    if (event.target.parentNode.classList.contains('first-dropdown')) {
      console.log(event.target.parentNode)
      displayIngredientList(recipes)
    }
  })
})

document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', event => {
    if (event.target.classList.contains('first-button')) {
      displayIngredientList(recipes)
    }
  })
})


