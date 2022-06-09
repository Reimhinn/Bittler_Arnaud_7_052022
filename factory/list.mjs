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