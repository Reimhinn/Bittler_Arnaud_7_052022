import recipes from './recipes.mjs'
import { cardFactory } from './factory/card.mjs'
import emptyIngredientArray, { listFactory }  from './factory/list.mjs'
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
const lists = document.querySelectorAll('.lists')

function showCards (recipesArray) {
  cards.innerHTML = ''
  recipesArray.forEach(recipe => {
    let cardModel = cardFactory(recipe)
    let cardModelDOM = cardModel.getCardDOM()
    cards.appendChild(cardModelDOM)
  })
  closeAllLists()
  generateAllFilters(recipesArray)
}

showCards(recipes)

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

function reloadListFromWord (word) {
  // tableau contenant tous les filtres

  lists.forEach(list => {
    list.innerHTML = ''
  })

  let filteredArray = ingredientArray.filter(ingredient =>
    ingredient.toUpperCase().includes(word.toUpperCase())
  )

  console.log(filteredArray)

  filteredArray.forEach(ingredient => {
    let listElement = document.createElement('li')
    listElement.classList.add('ingredient-li')
    listElement.textContent += ingredient
    document.querySelector('.ingredient-list').appendChild(listElement)
  })

  liIngredientListener()
}

document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('input', event => {
    let wordValue = event.target.value
    reloadListFromWord(wordValue)
  })
})

function closeAllLists () {
  closeDevice()
  closeIngredient()
  closeUstensils()
}

function generateAllFilters (data) {
  lists.forEach(list => {
    list.innerHTML = ''
  })

  emptyIngredientArray()

  generateUstensils(data)
  generateIngredients(data)
  generateDevice(data)

  liListener()
}

function liIngredientListener () {
  document.querySelectorAll('.ingredient-li').forEach(li => {
    li.addEventListener('click', event => {
      let ingredientToFliter = event.target.textContent
      // let newArray = recipes.filter(recipe => recipe.ingredients.some(ingredientObject => ingredientObject.ingredient === ingredientToFliter))

      const wordSelectedContainer = document.createElement('span')
      wordSelectedContainer.classList.add('word-selected')
      wordSelectedContainer.textContent += ingredientToFliter

      const deleteIcone = document.createElement('i')
      deleteIcone.classList.add('fa-regular', 'fa-circle-xmark', 'delete-cross')

      wordSelectedContainer.appendChild(deleteIcone)

      const main = document.querySelector('main')
      main.insertBefore(
        wordSelectedContainer,
        document.querySelector('.buttons-container')
      )

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
}

function liDeviceListener () {
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
}

function liUstensilListener () {
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
}

function liListener () {
  liIngredientListener()
  liDeviceListener()
  liUstensilListener()
}

document.querySelector('.search-bar').addEventListener('input', e => {
  let errorMessage = document.querySelector('.error-message')
  let searchString = e.target.value
  if (searchString.length >= 3) {
    errorMessage.style.display = 'none'
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

      errorMessage.style.display = 'inline'
    }
  }
  if (searchString.length < 3 && cards.childNodes.length !== recipes.length) {
    showCards(recipes)
    errorMessage.style.display = 'none'
  }
})
