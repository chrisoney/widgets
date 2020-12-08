import { subscribeToggle, setNewAttribute, reviewUpdate } from './story-utils.js'

// Modal

function closeModal(){
  document.querySelectorAll(".modal")
  .forEach(ele => {
    ele.classList.remove("open-modal");
  })
}

document.querySelector(".modal-background").addEventListener("click", (e)=> {
  e.preventDefault()
  closeModal();
})

document.querySelector(".modal-container")
  .addEventListener("click", (e)=> e.stopPropagation())

// Search

document.querySelector(".search").addEventListener("focusout", (e) => {
  e.preventDefault();
  const term = e.target.innerText;
  console.log(e.target.value)
})

// Stories labels


document.querySelectorAll(".fa-chevron-circle-left")
  .forEach(button=> button.addEventListener("click", (e)=>{
    e.target.classList.toggle("opening")
    const num = e.target.classList[2].split("-")[1];
    document.querySelector(`.container-${num}`).classList.toggle("open")
  }))

document.querySelectorAll(".fa-arrow-circle-right")
  .forEach(button => button.addEventListener("click", (e)=> {
    const id = e.target.classList[2].split("-")[1];
    window.location.href = `/stories/${id}`;
  }))

function handleSubscriptionConfirm(e, element, storyId) {
  e.preventDefault();
  subscribeToggle(storyId);
  closeModal();
  element.innerHTML = element.innerHTML === 'Subscribe' ? 'Unsubscribe' : 'Subscribe';
}

function handleSubscriptionClick(e){
  e.preventDefault();
    const buttonHolder = e.target
    const storyId = e.target.classList[1].split("-")[1];
    document.querySelectorAll(".modal")
      .forEach(ele => {
        ele.classList.add("open-modal");
      })
    document.querySelector(".confirm-button")
      .addEventListener("click", (e) => handleSubscriptionConfirm(e, buttonHolder,storyId), {once:true})
}

document.querySelectorAll(".subscribe-button")
  .forEach(ele => ele.addEventListener("click", (e) => handleSubscriptionClick(e)))


document.querySelectorAll(".fa-minus-circle")
  .forEach(button => button.addEventListener("click", (e)=> {
    const ele = e.target.nextSibling;
    const id = parseInt(e.target.id, 10);
    const attr = e.target.classList[2];
    setNewAttribute(ele, -1, id, attr)
  }))
document.querySelectorAll(".fa-plus-circle")
  .forEach(button => button.addEventListener("click", (e)=> {
    const ele = e.target.previousSibling;
    const id = parseInt(e.target.id, 10);
    const attr = e.target.classList[2];
    setNewAttribute(ele, 1, id, attr)
  }))

document.querySelectorAll(".reveal")
  .forEach(ele => ele.addEventListener("click", (e) => {
    e.preventDefault();
    const text = e.target.parentElement.lastChild;
    text.classList.toggle("hidden");
  }))

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

document.querySelectorAll(".stars")
  .forEach(star => star.addEventListener("mouseleave", async (e)=> {
    const targetEle = e.currentTarget;
    const storyId = targetEle.id;
    const res = await fetch(`/stories/${storyId}/recommendation/`);
    const data = await res.json()
    populateRating(data.recommendation.rating, targetEle)
  }))


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
});