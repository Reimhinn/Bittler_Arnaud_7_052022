import { listFactory } from '../factory/list.mjs'

export function displayUstensilsList (data) {
  const ustensilsListContainer = document.querySelector(
    '.ustensils-list-container'
  )
  data.forEach(recipe => {
    let listModel = listFactory(recipe)
    let ustensilsListModelDOM = listModel.getUstensilsListDOM()
    ustensilsListContainer.appendChild(ustensilsListModelDOM)
  })

  const thirdButton = document.querySelector('.third-button')
  const ustensilsButtonContainer = document.querySelector(
    '.ustensils-button-container'
  )

  let ustensilsDisplayValue = window.getComputedStyle(ustensilsListContainer)
    .display


  if (ustensilsDisplayValue === 'none') {
    ustensilsListContainer.style.display = 'block'
    thirdButton.style.width = '40vw'
    ustensilsButtonContainer.style.width = '40vw'
    thirdButton.placeholder = 'Rechercher un ustensile'
  } else {
    ustensilsListContainer.style.display = 'none'
    thirdButton.style.width = '110px'
    ustensilsButtonContainer.style.width = '150px'
    thirdButton.placeholder = 'Ustensiles'
  }
}
