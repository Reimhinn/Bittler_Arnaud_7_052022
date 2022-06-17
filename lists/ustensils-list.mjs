import { listFactory } from '../factory/list.mjs'

const ustensilsListContainer = document.querySelector(
  '.ustensils-list-container'
)
const thirdButton = document.querySelector('.third-button')
const ustensilsButtonContainer = document.querySelector(
  '.ustensils-button-container'
)

export function displayUstensilsList () {

  let ustensilsDisplayValue = window.getComputedStyle(ustensilsListContainer)
    .display


  if (ustensilsDisplayValue === 'none') {
    openUstensils()
  } else {
    closeUstensils()
  }
}


export function openUstensils () {
  let ustensilsDisplayValue = window.getComputedStyle(ustensilsListContainer)
    .display
  ustensilsListContainer.style.display = 'block'
  thirdButton.style.width = '40vw'
  ustensilsButtonContainer.style.width = '40vw'
  thirdButton.placeholder = 'Rechercher un ustensile'
}

export function closeUstensils () {
  let ustensilsDisplayValue = window.getComputedStyle(ustensilsListContainer)
    .display
  ustensilsListContainer.style.display = 'none'
  thirdButton.style.width = '110px'
  ustensilsButtonContainer.style.width = '150px'
  thirdButton.placeholder = 'Ustensiles'
}

export function generateUstensils(data) {
  data.forEach(recipe => {
    let listModel = listFactory(recipe)
    let ustensilsListModelDOM = listModel.getUstensilsListDOM()
    ustensilsListContainer.appendChild(ustensilsListModelDOM)
  })
}