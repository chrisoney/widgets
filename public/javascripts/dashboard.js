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
      for (let i = 0; i < e.target.parentElement.children.length; i++){
        const ele = e.target.parentElement.children[i];
        if (ele.id <= e.target.id){
          ele.classList.replace("far", "fas");
        } else {
          ele.classList.replace("fas", "far");
        }
      }
      resetRating();
    }))
}
function resetRating(){
  document.querySelectorAll(".fa-star")
    .forEach(star => star.addEventListener("mouseout", async (e)=> {
      const storyId = e.target.parentElement.id;
      const res = await fetch(`/stories/find-recommend/${storyId}`);
      const data = await res.json()
      const result = [];
      for (let i = 0; i < data.recommendation.rating; i++) {
        result.push(`<span id=${i+1} class="fas fa-star"></span>`)
      }
      for (let j = data.recommendation.rating + 1; j <= 5; j++){
        result.push(`<span id=${j} class="far fa-star"></span>`)
      }
      if (e.target.parentElement){
        e.target.parentElement.innerHTML = result.join("")
      }
      changeRating();
    }))
}

window.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  changeRating();
  resetRating();
});