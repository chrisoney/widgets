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
  }))
document.querySelectorAll(".fa-star")
  .forEach(star => star.addEventListener("mouseout", (e)=> {
    const storyId = e.target.parentElement.id;
    const res = await fetch("/stories/get-recommend", {
      body: JSON.stringify({
        storyId
      })
    });
    const data = await res.json()
    console.log(data.rating)
    const result = [];
  }))