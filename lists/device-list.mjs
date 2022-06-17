import { listFactory } from '../factory/list.mjs'

const deviceListContainer = document.querySelector('.device-list-container')
const secondButton = document.querySelector('.second-button')
const deviceButtonContainer = document.querySelector(
  '.device-button-container'
)

export function displayDeviceList () {

  let deviceDisplayValue = window.getComputedStyle(deviceListContainer).display

  if (deviceDisplayValue === 'none') {
    openDevice()
  } else {
    closeDevice()
  }
}

export function openDevice () {
  let deviceDisplayValue = window.getComputedStyle(deviceListContainer).display
  deviceListContainer.style.display = 'block'
  secondButton.style.width = '40vw'
  deviceButtonContainer.style.width = '40vw'
  secondButton.placeholder = 'Rechercher un appareil'
}

export function closeDevice () {
  let deviceDisplayValue = window.getComputedStyle(deviceListContainer).display
  deviceListContainer.style.display = 'none'
  secondButton.style.width = '110px'
  deviceButtonContainer.style.width = '150px'
  secondButton.placeholder = 'Appareils'
}



export function generateDevice (data) {
  data.forEach(recipe => {
    let listModel = listFactory(recipe)
    let deviceListModelDOM = listModel.getDeviceListDOM()
    deviceListContainer.appendChild(deviceListModelDOM)
  })
}