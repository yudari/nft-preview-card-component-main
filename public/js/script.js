const headerOverlay = document.querySelector('#headerOverlay')
const kotak1Overlay = document.querySelector('.overlay')
const kotak2Overlay = document.querySelector('.view-icon')
headerOverlay.addEventListener('mouseenter', (e) => {
  e.preventDefault()

  kotak1Overlay.style.opacity = '40%'
  kotak2Overlay.style.opacity = '40%'
})

headerOverlay.addEventListener('mouseleave', (e) => {
  e.preventDefault()

  kotak1Overlay.style.opacity = '0%'
  kotak2Overlay.style.opacity = '0%'
})
