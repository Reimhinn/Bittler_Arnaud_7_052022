import recipes from './recipes.mjs'
import { cardFactory } from './card.mjs'

const cards = document.querySelector('.cards')

function showCards() {
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
    const hasFirstClass = event.target.classList.contains('first-dropdown')
    console.log(hasFirstClass)
  })

});

function displayList () {

}