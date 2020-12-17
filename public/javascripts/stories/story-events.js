import { handleSubscriptionClick } from './functions/subscription.js';
import { setNewAttribute } from './story-utils.js';

// Modal Functions

function closeModal(){
  document.querySelectorAll(".modal")
  .forEach(ele => {
    ele.classList.remove("open-modal");
  })
}

// Modal Event Listeners

function modalEvents(){
  document.querySelector(".modal-background").addEventListener("click", (e)=> {
    e.preventDefault()
    closeModal();
  })
  
  document.querySelector(".modal-container")
    .addEventListener("click", (e)=> e.stopPropagation())
}

// Stories Label Event Listeners

function storyDropdownEvents(){
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
}

// Subscription Event Listeners

function subscribeEvents(){
  document.querySelectorAll(".subscribe-button")
    .forEach(ele => ele.addEventListener("click", (e) => handleSubscriptionClick(e)))
}

function detailChangeEvents(){
  
  document.querySelectorAll(".fa-minus-circle")
    .forEach(button => button.addEventListener("click", (e)=> {
      const ele = e.target.parentElement.children[2];
      const id = parseInt(e.target.id, 10);
      const attr = e.target.classList[2];
      setNewAttribute(ele, -1, id, attr)
    }))
  document.querySelectorAll(".fa-plus-circle")
    .forEach(button => button.addEventListener("click", (e)=> {
      console.log("hello")
      const ele = e.target.parentElement.children[2];
      const id = parseInt(e.target.id, 10);
      const attr = e.target.classList[2];
      setNewAttribute(ele, 1, id, attr)
    }))
}

function followEventListeners(){
  document.querySelectorAll(".follow-button")
    .forEach(ele => ele.addEventListener("click", async (e) => {
      e.preventDefault();
      const followedId = e.target.classList[1].split("-")[1];

      let res = await fetch("/stories/follows/toggle", {
        credentials: 'same-origin',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ followedId }),
      });
      res = await res.json();
      e.target.innerHTML = e.target.innerHTML === 'Follow' ? 'Unfollow' : 'Follow'
    }))
}


export { 
  modalEvents,
  storyDropdownEvents,
  subscribeEvents,
  detailChangeEvents,
  closeModal,
  followEventListeners
 }