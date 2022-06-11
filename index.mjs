import recipes from './recipes.mjs'
import { cardFactory } from './factory/card.mjs'
import { listFactory } from './factory/list.mjs'
import { displayIngredientList } from './lists/ingredient-list.mjs'
import { closeDevice, displayDeviceList } from './lists/device-list.mjs'
import { closeUstensils, displayUstensilsList } from './lists/ustensils-list.mjs'
import { closeIngredient } from './lists/ingredient-list.mjs'


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
      closeUstensils()
      closeDevice()
    } else if (event.target.classList.contains('second-dropdown')) {
      displayDeviceList(recipes)
      closeIngredient()
      closeUstensils()
    } else if (event.target.classList.contains('third-dropdown')) {
      displayUstensilsList(recipes)
      closeIngredient()
      closeDevice()
    }
  })
})

document.querySelectorAll('.dropdown-arrow').forEach(arrow => {
  arrow.addEventListener('click', event => {
    if (event.target.parentNode.classList.contains('first-dropdown')) {
      displayIngredientList(recipes)
      closeUstensils()
      closeDevice()
    } else if (event.target.parentNode.classList.contains('second-dropdown')) {
      displayDeviceList(recipes)
      closeIngredient()
      closeUstensils()
    } else if (event.target.parentNode.classList.contains('third-dropdown')) {
      displayUstensilsList(recipes)
      closeIngredient()
      closeDevice()
    }
  })
})

document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', event => {
    if (event.target.classList.contains('first-button')) {
      displayIngredientList(recipes)
      closeUstensils()
      closeDevice()
    } else if (event.target.classList.contains('second-button')) {
      displayDeviceList(recipes)
      closeIngredient()
      closeUstensils()
    } else if (event.target.classList.contains('third-button')) {
      displayUstensilsList(recipes)
      closeIngredient()
      closeDevice()
    }
  })
})


// document.querySelectorAll('.ingredient-list').forEach(li =>
//   li.addEventListener('click', event => {
//     let value = event.target.textContent
//   })
// )