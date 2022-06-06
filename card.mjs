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

    const imgContainer = document.createElement('img')
    imgContainer.src = 'https://via.placeholder.com/402x174/'
    cardTop.appendChild(imgContainer)

    const cardBodyLeft = document.createElement('div')
    cardBodyLeft.classList.add('card-body-left')

    const cardBodyRight = document.createElement('div')
    cardBodyRight.classList.add('card-body-right')

    cardBody.appendChild(cardBodyLeft)
    cardBody.appendChild(cardBodyRight)

    let cardTitle = document.createElement('h2')
    cardTitle.classList.add('card-title')
    let cardIngredientsBlock = document.createElement('div')

    cardBodyLeft.appendChild(cardTitle)
    cardBodyLeft.appendChild(cardIngredientsBlock)

    let cardTime = document.createElement('h2')
    cardTime.classList.add('card-time')
    let cardInstructionsBlock = document.createElement('div')
    cardInstructionsBlock.classList.add('card-instructions-block')

    let cardTimeBlock = document.createElement('span')
    cardTimeBlock.classList.add('card-time-block')

    cardBodyRight.appendChild(cardTimeBlock)
    cardBodyRight.appendChild(cardInstructionsBlock)

    let cardInstructions = document.createElement('p')
    cardInstructionsBlock.appendChild(cardInstructions)

    cardTitle.textContent = name

    ingredients.forEach(ingredientObject => {
      let ingredient = document.createElement('p')
      ingredient.classList.add('ingredient')

      let quantity = document.createElement('p')
      quantity.classList.add('quantity')

      let unit = document.createElement('p')
      unit.classList.add('unit')

      if (ingredientObject.unit === 'grammes') {
        ingredientObject.unit = 'g'
      } else if (ingredientObject.unit === 'cuillères à soupe') {
        ingredientObject.unit = 'cuillères'
        unit.style.marginLeft = '3px'
      }

      if (ingredientObject.quantity && ingredientObject.unit) {
        ingredient.textContent += ingredientObject.ingredient + ':' + ' '
        quantity.textContent += ingredientObject.quantity
        unit.textContent += ingredientObject.unit
      } else if (ingredientObject.quantity) {
        ingredient.textContent += ingredientObject.ingredient + ':' + ' '
        quantity.textContent += ingredientObject.quantity
      } else {
        ingredient.textContent += ingredientObject.ingredient
      }

      let cardIngredientBlock = document.createElement('div')
      cardIngredientBlock.classList.add('card-ingredient-block')

      cardIngredientBlock.appendChild(ingredient)
      cardIngredientBlock.appendChild(quantity)
      cardIngredientBlock.appendChild(unit)

      cardIngredientsBlock.appendChild(cardIngredientBlock)
    })

    let timeIcon = document.createElement('i')
    timeIcon.classList.add('fa-regular', 'fa-clock', 'time-icon')
    cardBodyRight.appendChild(timeIcon)

    cardTime.textContent = time + ' min'

    cardTimeBlock.appendChild(timeIcon)
    cardTimeBlock.appendChild(cardTime)

    cardInstructions.textContent = description

    return cardDOM
  }


  return { ...data, getCardDOM }
}
