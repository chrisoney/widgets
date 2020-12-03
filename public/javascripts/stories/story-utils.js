const storiesContainer = document.getElementById("stories-link");

if (storiesContainer){
    storiesContainer.addEventListener("click", (e)=>{
        e.stopPropagation();
        window.location.href = "/stories/dashboard";
    })
}

function subscribeButtons(){
    document.querySelectorAll(".subscribe-button")
        .forEach(ele => ele.addEventListener("click", async (e) => {
        e.preventDefault();
        const oldStoryId = e.target.classList[1].split("-")[1];
        let res = await fetch("http://localhost:8080/stories/subscriptions/toggle", {
            credentials: 'same-origin',
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ oldStoryId }),
        });
        res = await res.json();
        console.log(res.message);
        e.target.innerHTML = e.target.innerHTML === 'Subscribe' ? 'Unsubscribe' : 'Subscribe'
        }))
}

export { subscribeButtons }