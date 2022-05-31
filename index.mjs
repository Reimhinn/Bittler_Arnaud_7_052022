import recipes from './recipes.mjs'
import { cardFactory } from './card.mjs'

const cards = document.querySelector('.cards')





recipes.forEach(recipe => {
  console.log(recipe)
  let cardModel = cardFactory(recipe)
  let cardModelDOM = cardModel.getCardDOM()
  cards.appendChild(cardModelDOM)
});
