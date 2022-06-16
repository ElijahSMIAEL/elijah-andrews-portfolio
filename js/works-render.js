import { works } from "./works.js"

const workBottom = document.querySelector('.secondary-bottom')

const workDisplays = works.map(work => {
  const workDisplay = `
    <div class="file-display">
    <h1 class="work-name">${work.name}</h1>
    <p class="work-description">${work.description}</p>
    <img class="work-prev" src="${work.image}">
    <a href="${work.deployed}">Deployed site</a>
    <a href="${work.gitHub}">Github link</a>
    </div>
  `
  return workDisplay
}).join('')

workBottom.innerHTML = workDisplays
