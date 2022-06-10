
let homeBody = document.querySelector('.home-body')
let homeHeader = document.querySelector('.home-header')
let sideBar = document.querySelector('.preview-sidebar')
let previewIcons = document.querySelectorAll(".icon")
let toggleModeButton = document.querySelector('.dark-light-button')
let bioText = document.querySelectorAll('.about-bio')
let secondaryTop = document.querySelector('.secondary-top')
let secondaryBottom = document.querySelector('.secondary-bottom')
let secondaryHeader = document.querySelector('.secondary-header')
let homeButton = document.querySelector('.home-button')
let fileDisplay = document.querySelector('.file-display')
let profilePic = document.querySelector('#profile-pic')
let hiddenMsg = document.querySelector('.hidden-message')


toggleModeButton.addEventListener('click', darkModeToggle)

function darkModeToggle(evt) {
  localStorage.setItem("darkMode" , localStorage.darkMode === 'dark' ? 'light' : 'dark')
  darkModeRender()
}
function darkModeRender() {
  if(homeBody.id === 'home-body') {
    darkModeSetHome()
  }
  if(homeBody.id === 'about-body') {
    darkModeSetAbout()
  }
  if(homeBody.id === 'work-body'){
    darkModeSetWork()
  }
  if(homeBody.id === 'contact-body') {
    darkModeSetContact()
  }
  if(homeBody.id === 'resume-body') {
    darkModeSetResume()
  }
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
    hiddenMsg.textContent = "Zzz..."
    homeBody.classList.add("dark-mode-body")
    homeButton.classList.add("dark-mode")
    homeHeader.classList.add("dark-mode")
    toggleModeButton.classList.add("dark-mode")
    secondaryHeader.classList.add("dark-mode-header")
    bioText.forEach(element => {
      element.classList.add("dark-mode")
    })
  } else {
    hiddenMsg.textContent = "Hello!"
    homeBody.classList.remove("dark-mode-body")
    homeButton.classList.remove("dark-mode")
    homeHeader.classList.remove("dark-mode")
    toggleModeButton.classList.remove("dark-mode")
    secondaryHeader.classList.remove("dark-mode-header")
    bioText.forEach(element => {
      element.classList.remove("dark-mode")
    })
  }
}
function darkModeSetWork() {
  if (localStorage.darkMode === 'dark') {
    fileDisplay.classList.add("dark-mode-content")
    homeBody.classList.add("dark-mode-body")
    homeButton.classList.add("dark-mode")
    homeHeader.classList.add("dark-mode")
    toggleModeButton.classList.add("dark-mode")
    secondaryHeader.classList.add("dark-mode-header")
    secondaryBottom.classList.add("dark-mode-bottom")
  } else {
    fileDisplay.classList.remove("dark-mode-content")
    homeBody.classList.remove("dark-mode-body")
    homeButton.classList.remove("dark-mode")
    homeHeader.classList.remove("dark-mode")
    toggleModeButton.classList.remove("dark-mode")
    secondaryHeader.classList.remove("dark-mode-header")
    secondaryBottom.classList.remove("dark-mode-bottom")
  }
}
function darkModeSetContact() {
  if (localStorage.darkMode === 'dark') {
    homeBody.classList.add("dark-mode-body")
    homeButton.classList.add("dark-mode")
    homeHeader.classList.add("dark-mode")
    toggleModeButton.classList.add("dark-mode")
    secondaryHeader.classList.add("dark-mode-header")
    secondaryBottom.classList.add("dark-mode-bottom")
  } else {
    homeBody.classList.remove("dark-mode-body")
    homeButton.classList.remove("dark-mode")
    homeHeader.classList.remove("dark-mode")
    toggleModeButton.classList.remove("dark-mode")
    secondaryHeader.classList.remove("dark-mode-header")
    secondaryBottom.classList.remove("dark-mode-bottom")
  }
}
function darkModeSetResume() {
  if (localStorage.darkMode === 'dark') {
    fileDisplay.classList.add("dark-mode-content")
    homeBody.classList.add("dark-mode-body")
    homeButton.classList.add("dark-mode")
    homeHeader.classList.add("dark-mode")
    toggleModeButton.classList.add("dark-mode")
    secondaryHeader.classList.add("dark-mode-header")
    secondaryBottom.classList.add("dark-mode-bottom")
  } else {
    fileDisplay.classList.remove("dark-mode-content")
    homeBody.classList.remove("dark-mode-body")
    homeButton.classList.remove("dark-mode")
    homeHeader.classList.remove("dark-mode")
    toggleModeButton.classList.remove("dark-mode")
    secondaryHeader.classList.remove("dark-mode-header")
    secondaryBottom.classList.remove("dark-mode-bottom")
  }
}
darkModeRender()

profilePic.addEventListener('click', function(evt) {
  hiddenMsg.removeAttribute('hidden')
  setTimeout(function() {
    hiddenMsg.setAttribute('hidden', true)
  }, 1500)
}, false)

profilePic.addEventListener('click', function(evt) {
  bioText.forEach(element => {
    element.removeAttribute('hidden')
  })
})

