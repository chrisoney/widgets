const storiesContainer = document.getElementById("stories-link");

if (storiesContainer){
    storiesContainer.addEventListener("click", (e)=>{
        e.stopPropagation();
        window.location.href = "/stories/dashboard";
    })
}

const logout = document.querySelector(".logout")
if (logout) {
    logout.addEventListener("click", async (e) => {
        e.preventDefault()
        const res = await fetch("/users/logout", {
            method: "POST",

        })
        window.location.href = "/";
    })
}

function subscribeButtons(oldStoryId){
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
        e.target.innerHTML = e.target.innerHTML === 'Subscribe' ? 'Unsubscribe' : 'Subscribe'
        }))
}

const subscribeToggle = async (oldStoryId) => {
   
    let res = await fetch("http://localhost:8080/stories/subscriptions/toggle", {
        credentials: 'same-origin',
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ oldStoryId }),
    });
    res = await res.json();

}

const setNewAttribute = async (ele, change, id, attr) => {
    const newNum = parseInt(ele.innerHTML, 10) + change;
    let book = '';
    let chapter = '';
    if (attr === 'book') book = newNum.toString();
    else if (attr === 'chapter') chapter = newNum.toString()

    if (newNum >= 0){
        ele.innerHTML = newNum;
        const res = await fetch('/stories/subscriptions/update', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({ id, book, chapter }),
        })
    }
   
}

const reviewUpdate = async (review, storyId) => {
    await fetch(`/stories/recommendations/review/update`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ storyId, review }),
    })
}

export { 
    subscribeToggle, 
    subscribeButtons, 
    setNewAttribute,
    reviewUpdate }