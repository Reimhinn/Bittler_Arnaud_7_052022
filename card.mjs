export function cardFactory (data) {
  const {
    appliance,
    description,
    ingredients,
    name,
    servings,
    time,
    ustensils
  } = data

  function getCardDOM () {
    const cardDOM = document.createElement('article')
    cardDOM.classList.add('card')
    const cardTop = document.createElement('div')
    cardTop.classList.add('card-top')
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    cardDOM.appendChild(cardTop)
    cardDOM.appendChild(cardBody)

    const cardBodyLeft = document.createElement('div')
    cardBodyLeft.classList.add('card-body-left')

    const cardBodyRight = document.createElement('div')
    cardBodyRight.classList.add('card-body-right')

    cardBody.appendChild(cardBodyLeft)
    cardBody.appendChild(cardBodyRight)

    let cardTitle = document.createElement('h2')
    cardTitle.classList.add('card-title')
    let cardIngredientBlock = document.createElement('div')
    cardIngredientBlock.classList.add('card-ingredient-block')
    cardBodyLeft.appendChild(cardTitle)
    cardBodyLeft.appendChild(cardIngredientBlock)

    let cardTime = document.createElement('h2')
    cardTime.classList.add('card-time')
    let cardInstructionsBlock = document.createElement('div')
    cardInstructionsBlock.classList.add('card-instructions-block')

    let cardTimeBlock = document.createElement('span')
    cardTimeBlock.classList.add("card-time-block")

    cardBodyRight.appendChild(cardTimeBlock)
    cardBodyRight.appendChild(cardInstructionsBlock)

    let cardInstructions = document.createElement('p')
    cardInstructionsBlock.appendChild(cardInstructions)





    cardTitle.textContent = name

    ingredients.forEach(ingredientObject => {
      let ingredient = document.createElement('p')
      ingredient.classList.add('ingredient')
      ingredient.textContent += ingredientObject.ingredient
      cardIngredientBlock.appendChild(ingredient)
    })

    let timeIcon = document.createElement('i')
    timeIcon.classList.add('fa-regular', 'fa-clock', 'time-icon')
    cardBodyRight.appendChild(timeIcon)

    cardTime.textContent = time + " min"

    cardTimeBlock.appendChild(timeIcon)
    cardTimeBlock.appendChild(cardTime)

    cardInstructions.textContent = description

    return cardDOM
  }

  return { ...data, getCardDOM }
}
