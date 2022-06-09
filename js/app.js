
let homeBody = document.querySelector('.home-body')
let homeHeader = document.querySelector('.home-header')
let sideBar = document.querySelector('.preview-sidebar')
let previewIcons = document.querySelectorAll(".icon")
let toggleModeButton = document.querySelector('.dark-light-button')
let bioText = document.querySelectorAll('.about-bio')
let secondaryTop = document.querySelector('.secondary-top')
let secondaryBottom = document.querySelector('.secondary-bottom')
let secondaryHeader = document.querySelector('.secondary-header')

toggleModeButton.addEventListener('click', darkModeToggle)

function darkModeToggle(evt) {
  localStorage.setItem("darkMode" , localStorage.darkMode === 'dark' ? 'light' : 'dark')
  darkModeSetHome()
  darkModeSetAbout()
  darkModeSetContact()
  darkModeSetWork()
  darkModeSetResume()
}

function darkModeSetHome() {
  if (localStorage.darkMode === 'dark') {
    homeHeader.classList.add("dark-mode")
    toggleModeButton.classList.add("dark-mode")
    sideBar.classList.add("dark-mode")
    homeBody.classList.add("dark-mode-body")
    previewIcons.forEach(element => {
      element.classList.add("dark-mode")
    });
  } else {
    homeHeader.classList.remove("dark-mode")
    toggleModeButton.classList.remove("dark-mode")
    sideBar.classList.remove("dark-mode")
    homeBody.classList.remove("dark-mode-body")
    previewIcons.forEach(element => {
      element.classList.remove("dark-mode")
    })
  }
}
function darkModeSetAbout() {
  if (localStorage.darkMode === 'dark') {
    homeHeader.classList.add("dark-mode")
    toggleModeButton.classList.add("dark-mode")
    bioText.forEach(element => {
      element.classList.add("dark-mode")
    })
  } else {

  }
}
function darkModeSetWork() {
  if (localStorage.darkMode === 'dark') {

  } else {

  }
}
function darkModeSetContact() {
  if (localStorage.darkMode === 'dark') {

  } else {

  }
}
function darkModeSetResume() {
  if (localStorage.darkMode === 'dark') {

  } else {

  }
}
darkModeSetHome()
darkModeSetAbout()
darkModeSetWork()
darkModeSetContact()
darkModeSetResume()