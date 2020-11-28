document.querySelectorAll(".fa-chevron-circle-left")
  .forEach(button=> button.addEventListener("click", (e)=>{
    e.target.classList.toggle("opening")
    const num = e.target.classList[2].split("-")[1];
    document.querySelector(`.container-${num}`).classList.toggle("open")
  }))