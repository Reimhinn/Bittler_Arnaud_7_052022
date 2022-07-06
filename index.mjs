import recipes from './recipes.mjs'
import { cardFactory } from './factory/card.mjs'
import {
  ingredientArray,
  emptyIngredientArray,
  deviceArray,
  emptyDeviceArray,
  ustensilsArray,
  emptyUstensilArray,
  emptyAllArray,
  listFactory
} from './factory/list.mjs'
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

const cards = document.querySelector('.cards'),
  lists = document.querySelectorAll('.lists')

let actualRecipesArray = recipes

let chosenIngredients = [],
  chosenDevices = [],
  chosenUstensils = []

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
      displayIngredientList(actualRecipesArray)
      closeUstensils()
      closeDevice()
    } else if (event.target.classList.contains('second-dropdown')) {
      displayDeviceList(actualRecipesArray)
      closeIngredient()
      closeUstensils()
    } else if (event.target.classList.contains('third-dropdown')) {
      displayUstensilsList(actualRecipesArray)
      closeIngredient()
      closeDevice()
    }
  })
})

document.querySelectorAll('.dropdown-arrow').forEach(arrow => {
  arrow.addEventListener('click', event => {
    if (event.target.parentNode.classList.contains('first-dropdown')) {
      displayIngredientList(actualRecipesArray)
      closeUstensils()
      closeDevice()
    } else if (event.target.parentNode.classList.contains('second-dropdown')) {
      displayDeviceList(actualRecipesArray)
      closeIngredient()
      closeUstensils()
    } else if (event.target.parentNode.classList.contains('third-dropdown')) {
      displayUstensilsList(actualRecipesArray)
      closeIngredient()
      closeDevice()
    }
  })
})

document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', event => {
    if (event.target.classList.contains('first-button')) {
      displayIngredientList(actualRecipesArray)
      closeUstensils()
      closeDevice()
    } else if (event.target.classList.contains('second-button')) {
      displayDeviceList(actualRecipesArray)
      closeIngredient()
      closeUstensils()
    } else if (event.target.classList.contains('third-button')) {
      displayUstensilsList(actualRecipesArray)
      closeIngredient()
      closeDevice()
    }
  })
})

function reloadIngredientListFromWord (word) {
  const ingredientList = document.querySelector('.ingredient-list')
  ingredientList.innerHTML = ''
  let filteredArray = ingredientArray.filter(ingredient =>
    ingredient.toUpperCase().includes(word.toUpperCase())
  )

  filteredArray.forEach(ingredient => {
    let listElement = document.createElement('li')
    listElement.classList.add('ingredient-li')
    listElement.textContent = ingredient
    ingredientList.appendChild(listElement)
  })

  liIngredientListener()
}

function reloadDeviceListFromWord (word) {
  const deviceList = document.querySelector('.device-list')
  deviceList.innerHTML = ''

  let filteredArray = deviceArray.filter(device =>
    device.toUpperCase().includes(word.toUpperCase())
  )

  filteredArray.forEach(device => {
    let listElement = document.createElement('li')
    listElement.classList.add('device-li')
    listElement.textContent = device
    deviceList.appendChild(listElement)
  })

  liDeviceListener()
}

function reloadUstensilListFromWord (word) {
  const ustensilList = document.querySelector('.ustensils-list')
  ustensilList.innerHTML = ''

  let filteredArray = ustensilsArray.filter(ustensil =>
    ustensil.toUpperCase().includes(word.toUpperCase())
  )

  filteredArray.forEach(ustensil => {
    let listElement = document.createElement('li')
    listElement.classList.add('ustensil-li')
    listElement.textContent = ustensil
    ustensilList.appendChild(listElement)
  })

  liUstensilListener()
}

document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('input', event => {
    let wordValue = event.target.value
    if (event.target.classList.contains('first-button')) {
      reloadIngredientListFromWord(wordValue)
    } else if (event.target.classList.contains('second-button')) {
      reloadDeviceListFromWord(wordValue)
    } else if (event.target.classList.contains('third-button')) {
      reloadUstensilListFromWord(wordValue)
    }
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

  emptyAllArray()

  generateUstensils(data)
  generateIngredients(data)
  generateDevice(data)

  liListener()
}

function liIngredientListener () {
  document.querySelectorAll('.ingredient-li').forEach(li => {
    li.addEventListener('click', event => {
      let ingredientToFliter = event.target.textContent

      // let newArray = actualRecipesArray.filter(recipe => recipe.ingredients.some(ingredientObject => ingredientObject.ingredient === ingredientToFliter))

      chosenIngredients.push(ingredientToFliter)

      const wordSelectedContainer = document.createElement('span')
      wordSelectedContainer.classList.add('word-selected')
      wordSelectedContainer.textContent += ingredientToFliter

      const deleteIcone = document.createElement('i')
      deleteIcone.classList.add(
        'fa-regular',
        'fa-circle-xmark',
        'delete-cross',
        'ingredient-cross'
      )

      wordSelectedContainer.appendChild(deleteIcone)

      const main = document.querySelector('main')
      main.insertBefore(
        wordSelectedContainer,
        document.querySelector('.buttons-container')
      )

      // let newArray = []
      // for (let i = 0; i <= actualRecipesArray.length - 1; i++) {
      //   let recipe = actualRecipesArray[i]
      //   for (let j = 0; j <= recipe.ingredients.length - 1; j++) {
      //     if (recipe.ingredients[j].ingredient === ingredientToFliter) {
      //       newArray.push(recipe)
      //     }
      //   }
      // }

      actualRecipesArray = generateArrayFromIngredientsSelected()
      showCards(actualRecipesArray)
      deleteCrossListener()
    })
  })
}

function liDeviceListener () {
  document.querySelectorAll('.device-li').forEach(li =>
    li.addEventListener('click', event => {
      let deviceToFliter = event.target.textContent
      // let newArray = recipes.filter(recipe => recipe.appliance === deviceToFliter))

      chosenDevices.push(deviceToFliter)

      const wordSelectedContainer = document.createElement('span')
      wordSelectedContainer.classList.add('word-selected', 'device-selected')
      wordSelectedContainer.textContent += deviceToFliter

      const deleteIcone = document.createElement('i')
      deleteIcone.classList.add(
        'fa-regular',
        'fa-circle-xmark',
        'delete-cross',
        'device-cross'
      )

      wordSelectedContainer.appendChild(deleteIcone)

      const main = document.querySelector('main')
      main.insertBefore(
        wordSelectedContainer,
        document.querySelector('.buttons-container')
      )

      // let newArray = []
      // for (let i = 0; i <= recipes.length - 1; i++) {
      //   let recipe = recipes[i]
      //   if (recipe.appliance === deviceToFliter) {
      //     newArray.push(recipe)
      //   }
      // }
      actualRecipesArray = generateArrayFromDevicesSelected()
      showCards(actualRecipesArray)
      deleteCrossListener()
    })
  )
}

function liUstensilListener () {
  document.querySelectorAll('.ustensil-li').forEach(li =>
    li.addEventListener('click', event => {
      let ustensilToFliter = event.target.textContent
      // let newArray = recipes.filter(recipe => recipe.ustensils.includes(ustensilToFliter))

      chosenUstensils.push(ustensilToFliter)

      const wordSelectedContainer = document.createElement('span')
      wordSelectedContainer.classList.add('word-selected', 'ustensil-selected')
      wordSelectedContainer.textContent += ustensilToFliter

      const deleteIcone = document.createElement('i')
      deleteIcone.classList.add(
        'fa-regular',
        'fa-circle-xmark',
        'delete-cross',
        'ustensil-cross'
      )

      wordSelectedContainer.appendChild(deleteIcone)

      const main = document.querySelector('main')
      main.insertBefore(
        wordSelectedContainer,
        document.querySelector('.buttons-container')
      )

      // let newArray = []
      // for (let i = 0; i <= recipes.length - 1; i++) {
      //   let recipe = recipes[i]
      //   for (let j = 0; j <= recipe.ustensils.length - 1; j++) {
      //     if (recipe.ustensils[j] === ustensilToFliter) {
      //       newArray.push(recipe)
      //     }
      //   }
      // }

      actualRecipesArray = generateArrayFromUstensilsSelected()
      showCards(actualRecipesArray)
      deleteCrossListener()
    })
  )
}

function generateArrayFromIngredientsSelected () {
  let newArray = []
  console.log(chosenIngredients)
  if (chosenIngredients.length !== 0) {
    chosenIngredients.forEach(chosenIngredient => {
      newArray = actualRecipesArray.filter(recipe =>
        recipe.ingredients.some(
          ingredientObject => ingredientObject.ingredient === chosenIngredient
        )
      )
    })
  } else {
    newArray = recipes
  }
  return newArray
}

function generateArrayFromDevicesSelected () {
  let newArray = []

  if (chosenDevices.length !== 0) {
    chosenDevices.forEach(chosenDevice => {
      newArray = actualRecipesArray.filter(
        recipe => recipe.appliance === chosenDevice
      )
    })
  }

  return newArray
}

function generateArrayFromUstensilsSelected () {
  let newArray = []

  if (chosenUstensils.length !== 0) {
    chosenUstensils.forEach(chosenUstensil => {
      newArray = actualRecipesArray.filter(recipe =>
        recipe.ustensils.includes(chosenUstensil)
      )
    })
  }

  return newArray
}

function generateArrayFromWordSelected () {
  let newArray = []

  chosenIngredients.forEach(chosenIngredient => {
    newArray = recipes.filter(recipe =>
      recipe.ingredients.some(
        ingredientObject => ingredientObject.ingredient === chosenIngredient
      )
    )
  })
  console.log(chosenIngredients)

  chosenDevices.forEach(chosenDevice => {
    newArray = recipes.filter(recipe => recipe.appliance === chosenDevice)
  })

  chosenUstensils.forEach(chosenUstensil => {
    newArray = recipes.filter(recipe =>
      recipe.ustensils.includes(chosenUstensil)
    )
  })

  if (
    chosenIngredients.length === 0 &&
    chosenDevices.length === 0 &&
    chosenUstensils.length === 0
  ) {
    newArray = recipes
    actualRecipesArray = recipes
  }

  return newArray
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

function deleteCrossListener () {
  let crossTest = document.querySelectorAll('.delete-cross')
  crossTest.forEach(cross =>
    cross.addEventListener('click', event => {
      let targetWord = event.target.parentNode.textContent

      if (event.target.classList.contains('ingredient-cross')) {
        let wordIndex = chosenIngredients.indexOf(targetWord)
        if (wordIndex !== -1) {
          chosenIngredients.splice(wordIndex, 1)
          console.log(wordIndex)
        }
      } else if (event.target.classList.contains('device-cross')) {
        let wordIndex = chosenDevices.indexOf(targetWord)
        if (wordIndex !== -1) {
          chosenDevices.splice(wordIndex, 1)
        }
      } else {
        let wordIndex = chosenUstensils.indexOf(targetWord)
        if (wordIndex !== -1) {
          chosenUstensils.splice(wordIndex, 1)
        }
      }

      event.target.parentNode.remove()

      showCards(generateArrayFromWordSelected())
    })
  )
}
