export async function cardFactory (data) {
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
    let cardRecipe = document.createElement('p')
    cardRecipe.classList.add('card-recipe')
    cardBodyLeft.appendChild(cardTitle)
    cardBodyLeft.appendChild(cardRecipe)

    let cardTime = document.createElement('h2')
    cardTime.classList.add('card-time')
    let cardInstructions = document.createElement('p')
    cardInstructions.classList.add('card-instructions')

    cardBodyRight.appendChild(cardTime)
    cardBodyRight.appendChild(cardInstructions)

    cardTitle.textContent = name
    cardRecipe.textContent = ingredients
    cardTime.textContent = time
    cardInstructions = description

    return cardDOM
  }

  return { ...data, getCardDOM }
}
