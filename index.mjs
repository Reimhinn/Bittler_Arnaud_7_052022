import recipes from './recipes.mjs'
import { cardFactory } from './factory/card.mjs'
import { listFactory } from './factory/list.mjs'
import {
  displayIngredientList,
  generateIngredients
} from './lists/ingredient-list.mjs'
import {
  closeDevice,
  displayDeviceList,
  generateDevice
} from './lists/device-list.mjs'
import {
  closeUstensils,
  displayUstensilsList,
  generateUstensils
} from './lists/ustensils-list.mjs'
import { closeIngredient } from './lists/ingredient-list.mjs'

const cards = document.querySelector('.cards')

function showCards (recipesArray) {
  cards.innerHTML = ''
  recipesArray.forEach(recipe => {
    let cardModel = cardFactory(recipe)
    let cardModelDOM = cardModel.getCardDOM()
    cards.appendChild(cardModelDOM)
  })
  closeAllLists()
}

showCards(recipes)
generateUstensils(recipes)
generateIngredients(recipes)
generateDevice(recipes)

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

function closeAllLists () {
  closeDevice()
  closeIngredient()
  closeUstensils()
}

document.querySelectorAll('.ingredient-li').forEach(li => {
  li.addEventListener('click', event => {
    let ingredientToFliter = event.target.textContent
    // let newArray = recipes.filter(recipe => recipe.ingredients.some(ingredientObject => ingredientObject.ingredient === ingredientToFliter))

    let newArray = []
    for (let i = 0; i <= recipes.length - 1; i++) {
      let recipe = recipes[i]
      for (let j = 0; j <= recipe.ingredients.length - 1; j++) {
        if (recipe.ingredients[j].ingredient === ingredientToFliter) {
          newArray.push(recipe)
        }
      }
    }
    showCards(newArray)
  })
})

document.querySelectorAll('.device-li').forEach(li =>
  li.addEventListener('click', event => {
    let deviceToFliter = event.target.textContent
    // let newArray = recipes.filter(recipe => recipe.appliance === deviceToFliter))

    let newArray = []
    for (let i = 0; i <= recipes.length - 1; i++) {
      let recipe = recipes[i]
      if (recipe.appliance === deviceToFliter) {
        newArray.push(recipe)
      }
    }
    showCards(newArray)
  })
)

document.querySelectorAll('.ustensil-li').forEach(li =>
  li.addEventListener('click', event => {
    let ustensilToFliter = event.target.textContent
    // let newArray = recipes.filter(recipe => recipe.ustensils.includes(ustensilToFliter))

    let newArray = []
    for (let i = 0; i <= recipes.length - 1; i++) {
      let recipe = recipes[i]
      for (let j = 0; j <= recipe.ustensils.length - 1; j++) {
        if (recipe.ustensils[j] === ustensilToFliter) {
          newArray.push(recipe)
        }
      }
    }
    showCards(newArray)
  })
)

document.querySelector('.search-bar').addEventListener('keyup', e => {
  let searchString = e.target.value
  if (searchString.length >= 3) {
    let newArray = recipes.filter(
      recipe =>
        recipe.name.toUpperCase().includes(searchString.toUpperCase()) ||
        recipe.description
          .toUpperCase()
          .includes(
            searchString.toUpperCase() ||
              recipe.ingredients.some(
                ingredientObject.ingredient
                  .toUpperCase()
                  .includes(searchString.toUpperCase())
              )
          )
    )
    showCards(newArray)
    if (newArray.length === 0) {
      cards.innerHTML === ''
      let errorMessage = document.querySelector('.error-message')
      errorMessage.style.display = "inline"
    }
  }
  if (cards.childNodes.length === 0 && searchString.length < 3) {
    showCards(recipes)
  }
})
