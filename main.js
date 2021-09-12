import { fetchExample } from './fetch.js'

function init() {
  const body = document.querySelector('body')
  const pageTitel = document.createElement('h1')
  pageTitel.textContent = 'Meet all Harry Potter characters'
  body.appendChild(pageTitel)

  fetchExample()
}
init()
