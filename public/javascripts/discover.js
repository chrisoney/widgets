function storyEventListeners(){
  document.querySelectorAll(".fa-chevron-circle-left")
    .forEach(button=> button.addEventListener("click", (e)=>{
      e.target.classList.toggle("opening")
      const num = e.target.classList[2].split("-")[1];
      document.querySelector(`.container-${num}`).classList.toggle("open")
    }))

  document.querySelectorAll(".reveal")
    .forEach(ele => ele.addEventListener("click", (e) => {
      e.preventDefault();
      const text = document.querySelector(`.description-text-${e.target.id}`);
      text.classList.toggle("hidden");
    }))
}
window.addEventListener("DOMContentLoaded", (e)=> {
  storyEventListeners()
})

const tabs = document.querySelectorAll(".nav-item")
tabs.forEach((tab) => tab.addEventListener("click", ()=>{
  tabs.forEach(tab => tab.classList.remove("active"));
  tab.classList.add("active");
}))

document.querySelector("#stories").addEventListener("click", async e =>{
  try {
    const res = await fetch("/stories/discover-stories");
    const data = await res.json();
    
    const stories = data.map((story, idx)=> {
      return `
      <li class="story-container">
        <div class="story-header-container">
          <span class="story-title">${story.title}</span>
          <div class="story-button-container">
            <span class="fas fa-chevron-circle-left toggle-${idx}"></span>
            <span class="fas fa-arrow-circle-right"></span>
          </div>
        </div>
        <div class="story-details-container container-${idx}">
          <div class="story-details-top">
            <div class="story-details-top-left">
              <a href=${story.link} class="link">Link to Story</a>
            </div>
            <div class="story-details-top-right">
              <span class="subscribe">Subscribe</span>
            </div>
          </div>
          <div class="story-details-bottom">
            <div class="description-container">
              <span id="${idx}" class="reveal">Description</span>
              <p class="description-text-${idx} hidden">${story.description}</p>
            </div>
          </div>
        </div>
      </li>
      `
    })
    document.querySelector(".tab-content").innerHTML = `
      <ul>
        ${stories.join("")}
      </ul>
    `;
    storyEventListeners()
  } catch (e){
    throw new Error('Uh oh. Something went wrong...');
  }
});

document.querySelector("#users").addEventListener("click", async e =>{
  try {
    const res = await fetch("/stories/discover-users");
    const data = await res.json()
    const result = [];

    data.forEach(following => {
      const stories = following.recommendedStories.map(story => {
        return `
          <span class="following-story-title">${story.title}</span>
          <a href=${story.link}>Link to Story</a>
        `
      })
      result.push(`
        <div class="following-container">
          <div class="following-header">
            <div class="following-name">${following.username}</div>
            ${stories.join('')}
          </div>
        </div>
      `);
      
    })
    document.querySelector(".tab-content").innerHTML = result.join("");
  } catch (e){
    throw new Error('Uh oh. Something went wrong...');
  }

});

document.querySelector("#follows").addEventListener("click", async e =>{
  try {
    const res = await fetch("/stories/discover-follows");
    const data = await res.json()
    const result = [];
    
    data.forEach(following => {
      const stories = following.recommendedStories.map(story => {
        return `
          <span class="following-story-title">${story.title}</span>
          <a href=${story.link}>Link to Story</a>
        `
      })
      result.push(`
        <div class="following-container">
          <div class="following-header">
            <div class="following-name">${following.username}</div>
            ${stories.join('')}
          </div>
        </div>
      `);
      
    })
    document.querySelector(".tab-content").innerHTML = result.join("");
  } catch (e){
    throw new Error('Uh oh. Something went wrong...');
  }
});