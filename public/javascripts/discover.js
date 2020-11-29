const tabs = document.querySelectorAll(".nav-item")

tabs.forEach((tab) => tab.addEventListener("click", ()=>{
  tabs.forEach(tab => tab.classList.remove("active"));
  tab.classList.add("active");
}))

document.querySelector("#stories").addEventListener("click", async e =>{
  try {
    const res = await fetch("/stories/discover-stories");
    const data = await res.json();
    
    const stories = data.map((story)=> {
      return `
        <li class="story-container">
          <a href=${story.link} class="story-title">${story.title}</a>
        </li>
      `
    })
    document.querySelector(".tab-content").innerHTML = `
      <ul>
        ${stories.join("")}
      </ul>
    `;
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