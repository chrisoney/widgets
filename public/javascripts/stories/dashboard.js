import { reviewUpdate } from './story-utils.js';
import { 
  modalEvents, 
  storyDropdownEvents,
  subscribeEvents,
 } from './story-events.js';

// Search Event Listeners

document.querySelector(".search").addEventListener("focusout", (e) => {
  e.preventDefault();
  const term = e.target.innerText;
  console.log(e.target.value)
})

// Details & Recommendation Event Listeners

document.querySelectorAll(".reveal")
  .forEach(ele => ele.addEventListener("click", (e) => {
    e.preventDefault();
    const text = e.target.parentElement.lastChild;
    text.classList.toggle("hidden");
  }))

document.querySelectorAll(".stars")
  .forEach(star => star.addEventListener("mouseleave", async (e)=> {
    const targetEle = e.currentTarget;
    const storyId = targetEle.id;
    const res = await fetch(`/stories/${storyId}/recommendation/`);
    const data = await res.json()
    populateRating(data.recommendation.rating, targetEle)
  }))

// Review functions

function reviewEvent(){
  document.querySelectorAll(".review-text")
    .forEach(ele => ele.addEventListener("click", (e) => {
      const oldText = e.target.innerHTML;
      const storyId = e.target.parentElement.id;
      const oldTarget = e.target;
      let none = false;
      if (e.target.classList[1] === "none") none = true;
      e.target.classList.remove("none");
      e.target.innerHTML = `
        <div class="new-review">
          <textarea class="new-review-textarea"></textarea>
          <div class="new-review-buttons">
            <button class="submit-review">Submit</button>
            <button class="delete-review">Delete</button>
            <button class="cancel-review">Cancel</button>
          </div>
        </div>
      `
      document.querySelector(".new-review-buttons .submit-review").addEventListener("click", (e) => {
        const newText = document.querySelector(".new-review-textarea").value
        reviewUpdate(newText, storyId);
        e.target.parentElement.innerHTML = newText;
      })
      document.querySelector(".new-review-buttons .cancel-review").addEventListener("click", (e) => {
        oldTarget.innerHTML = oldText;
        if (none) oldTarget.classList.add("none");
      })

      document.querySelector(".new-review-buttons .delete-review").addEventListener("click", (e) => {
        reviewUpdate(null, storyId);
        oldTarget.innerHTML = 'No review yet';
        oldTarget.classList.add("none");
      })

    }, {once: true }))
}

function changeRating(){
  document.querySelectorAll(".fa-star")
  .forEach(star => star.addEventListener("mouseover", (e)=> {
      const cls = ["fas", "far"]
      for (let i = 0; i < e.target.parentElement.children.length; i++){
        const ele = e.target.parentElement.children[i];
        const full = e.target.parentElement.classList;
        if (ele.id <= e.target.id){
          ele.classList.remove(...cls);
          ele.classList.add("fas")
        } else {
          ele.classList.remove(...cls);
          ele.classList.add("far")
        }
      }
    }))
}

function populateRating(rating, container){
  const result = [];
  rating = parseInt(rating, 10);
  for (let i = 0; i < rating; i++) {
    result.push(`<span id=${i+1} class="fas fa-star"></span>`)
  }
  for (let j = rating + 1; j <= 5; j++){
    result.push(`<span id=${j} class="far fa-star"></span>`)
  }
  if (container){
    container.innerHTML = result.join("")
  }
  changeRating();
  newRating();
}

function newRating(){
  document.querySelectorAll(".fa-star")
    .forEach(star => star.addEventListener("click", async (e)=> {
      const storyId = e.target.parentElement.id;
      const rating = e.target.id;
      const res = await fetch(`/stories/${storyId}/recommendation/`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ storyId, rating }),
      });
      const data = await res.json()
      
      populateRating(data.recommendation.rating, e.target.parentElement)
    }, {once: true}))
}

window.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  changeRating();
  newRating();
  reviewEvent();
  modalEvents();
  storyDropdownEvents();
  subscribeEvents()
});