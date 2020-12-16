import { followEventListeners } from './story-events.js'

document.querySelector('.back-button-container')
  .addEventListener("click", () => {
    window.history.back();
  })

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  followEventListeners();
})