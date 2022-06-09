import { listFactory } from "../factory/list.mjs"

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