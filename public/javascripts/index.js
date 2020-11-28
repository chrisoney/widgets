const storiesContainer = document.getElementById("stories-link");

storiesContainer.addEventListener("click", (e)=>{
    e.stopPropagation();
    window.location.href = "/stories/dashboard";
})