import { subscribeButtons } from './story-utils.js'



document.querySelectorAll(".fa-chevron-circle-left")
  .forEach(button=> button.addEventListener("click", (e)=>{
    e.target.classList.toggle("opening")
    const num = e.target.classList[2].split("-")[1];
    document.querySelector(`.container-${num}`).classList.toggle("open")
  }))

document.querySelectorAll(".reveal")
  .forEach(ele => ele.addEventListener("click", (e) => {
    e.preventDefault();
    const text = e.target.parentElement.lastChild;
    text.classList.toggle("hidden");
  }))

function changeRating(){
  document.querySelectorAll(".fa-star")
  .forEach(star => star.addEventListener("mouseover", (e)=> {
      const cls = ["fas", "far"]
      for (let i = 0; i < e.target.parentElement.children.length; i++){
        const ele = e.target.parentElement.children[i];
        if (ele.id <= e.target.id){
          ele.classList.remove(...cls);
          ele.classList.add("fas")
        } else {
          ele.classList.remove(...cls);
          ele.classList.add("far")
        }
      }
      resetRating();
      newRating();
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
}

function resetRating(){
  document.querySelectorAll(".fa-star")
    .forEach(star => star.addEventListener("mouseout", async (e)=> {
      const storyId = e.target.parentElement.id;
      const res = await fetch(`/stories/${storyId}/recommendation/`);
      const data = await res.json()

      populateRating(data.recommendation.rating, e.target.parentElement)
    }))
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
    }))
}

window.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  changeRating();
  resetRating();
  subscribeButtons();
});