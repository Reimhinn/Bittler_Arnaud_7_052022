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

  let deviceArray = []

  function getIngredientListDOM () {
    let ingredientList = document.querySelector('.ingredient-list')
    ingredients.forEach(ingredientObject => {
      let ingredientListElement = document.createElement('li')
      ingredientListElement.textContent += ingredientObject.ingredient
      ingredientList.appendChild(ingredientListElement)
    })

    return ingredientList
  }

  function getDeviceListDOM () {
    let deviceList = document.querySelector('.device-list')
    let deviceListElement = document.createElement('li')

    deviceArray.push(appliance)
    deviceListElement.textContent += appliance

    deviceList.appendChild(deviceListElement)

    return deviceList
  }

  return { ...data, getIngredientListDOM, getDeviceListDOM, deviceArray }
}

let listModel = getDeviceListDOM()

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

export function displayDeviceList (data) {
  const deviceListContainer = document.querySelector('.device-list-container')
  data.forEach(recipe => {
    let listModel = listFactory(recipe)
    let deviceListModelDOM = listModel.getDeviceListDOM()
    deviceListContainer.appendChild(deviceListModelDOM)
  })

  const secondButton = document.querySelector('.second-button')
  const deviceButtonContainer = document.querySelector(
    '.device-button-container'
  )

  let deviceDisplayValue = window.getComputedStyle(deviceListContainer).display

  if (deviceDisplayValue === 'none') {
    deviceListContainer.style.display = 'block'
    secondButton.style.width = '40vw'
    deviceButtonContainer.style.width = '40vw'
  } else {
    deviceListContainer.style.display = 'none'
    secondButton.style.width = '110px'
    deviceButtonContainer.style.width = '150px'
  }
}
