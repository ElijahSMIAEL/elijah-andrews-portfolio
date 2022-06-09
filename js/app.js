homeBody = document.querySelector('.home-body')
homeHeader = document.querySelector('.home-header')
toggleModeButton = document.querySelector('.dark-light-button')
sideBar = document.querySelector('.preview-sidebar')
previewIcons = document.querySelectorAll(".icon")


toggleModeButton.addEventListener('click', darkMode)

function darkMode(evt) {
  homeBody.classList.toggle("dark-mode-body")
  homeHeader.classList.toggle("dark-mode")
  toggleModeButton.classList.toggle("dark-mode")
  sideBar.classList.toggle("dark-mode")
  previewIcons.classList.toggle("dark-mode")
}