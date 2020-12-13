document.querySelector('.back-button-container')
  .addEventListener("click", () => {
    window.history.back();
  })

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

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  followEventListeners()
})