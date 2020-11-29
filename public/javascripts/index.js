const storiesContainer = document.getElementById("stories-link");

if (storiesContainer){
    storiesContainer.addEventListener("click", (e)=>{
        e.stopPropagation();
        window.location.href = "/stories/dashboard";
    })
}