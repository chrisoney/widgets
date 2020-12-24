import { reviewUpdate, setNewAttribute, dashStoryDetail } from './story-utils.js';


import { 
  detailChangeEvents,
  detailEventListeners,
  modalEvents, 
  storyDropdownEvents,
  subscribeEvents,
  recDetailsEvents,
  changeRating,
  newRating
 } from './story-events.js';

// let currStories = document.querySelector('.currStories').innerHTML;
// currStories = JSON.parse(currStories);
// console.log(currStories[0]);

//

// Search Functions

const searchBar = document.querySelector(".search");
const dashList = document.querySelector(".stories-container ul");

function DashSearchRating(recommendation){
  let i = 0, j = recommendation.rating + 1;
  let results = []
  while (i < recommendation.rating){
    results.push(`<span id=${i+1} class="fas fa-star user-rating")></span>`);
    i++;
  }
  while (j <= 5){
    results.push(`<span id=${j} class="far fa-star user-rating")></span>`);
    j++;
  }
  return results.join('');
}

function DashSearchReview(recommendation){
  if (recommendation.review)
    return `<div id=${recommendation.id} class="review-text hidden")>${recommendation.review}</div>`;
  else
    return `<div id=${recommendation.id} class="review-text none hidden">No review yet</div>`;
}

const submitSearch = async (searchEle, dashListEle) => {
  const res = await fetch(`/stories/search?term=${searchEle.value}`, {})
  const data = await res.json();
  const stories = data.stories.map((story, idx)=> {
    let recommendation = story.recommendation[0] || { id: null, rating: 0, review: ''}
    return `
    <li class="story-container">
      <div class="story-header-container">
        <span class="story-title")>${story.title}</span>
        <div class="story-button-container">
          <span class="fas fa-chevron-circle-left toggle-${idx}"></span>
          <span class="fas fa-arrow-circle-right id-${story.id}"></span>
        </div>
      </div>
      <div class="story-details-container container-${idx}">
        <div class="story-details-top">
          <div class="story-details-top-left">
            <div class="detail-container">
              ${dashStoryDetail("Book:", story.Subscription.book, story.id, "book")}
            </div>
            <div class="detail-container">
              ${dashStoryDetail("Chapter:", story.Subscription.chapter, story.id, "chapter")}
            </div>
            <a href=${story.link} class="link">Link to Story</a>
          </div>
          <div class="story-details-top-right">
            <div id=${story.id} class="stars user-stars">
              ${DashSearchRating(recommendation)}
            </div>
            <div class="subscribe-button sub-${story.id}">Unsubscribe</div>
          </div>
        </div>
        <div class="story-details-bottom">
          <div class="description-container">
            <div class="reveal">Description</div>
            <p class="description-text hidden">${story.description}</p> 
          </div>
          <div id=${story.id} class="review-container">
            <div class="reveal">Review</div>
            ${DashSearchReview(recommendation)}
          </div>
        </div>
      </div>
    </li>
    `
  })
  dashListEle.innerHTML = stories.join('');
  callEvents();
}

// Search Event Listeners

searchBar.addEventListener("search", (e) => {
  e.preventDefault();
  submitSearch(e.target, dashList)
})

searchBar.addEventListener("input", (e) => {
  e.preventDefault();
  submitSearch(e.target, dashList)
})

document.querySelector(".fa-search").addEventListener("click", (e)=> {
  e.preventDefault();
  submitSearch(searchBar, dashList);
});


// Review functions

function reviewEvent(){
  document.querySelectorAll(".review-text")
    .forEach(ele => ele.addEventListener("click", (e) => {
      const oldText = e.target.innerHTML;
      const storyId = e.target.parentElement.id;
      const oldTarget = e.target;
      let none = false;
      if (e.target.classList[1] === "none") none = true;
      e.target.classList.remove("none");
      e.target.innerHTML = `
        <div class="new-review">
          <textarea class="new-review-textarea"></textarea>
          <div class="new-review-buttons">
            <button class="submit-review">Submit</button>
            <button class="delete-review">Delete</button>
            <button class="cancel-review">Cancel</button>
          </div>
        </div>
      `
      document.querySelector(".new-review-buttons .submit-review").addEventListener("click", (e) => {
        const newText = document.querySelector(".new-review-textarea").value
        reviewUpdate(newText, storyId);
        e.target.parentElement.innerHTML = newText;
      })
      document.querySelector(".new-review-buttons .cancel-review").addEventListener("click", (e) => {
        oldTarget.innerHTML = oldText;
        if (none) oldTarget.classList.add("none");
      })

      document.querySelector(".new-review-buttons .delete-review").addEventListener("click", (e) => {
        reviewUpdate(null, storyId);
        oldTarget.innerHTML = 'No review yet';
        oldTarget.classList.add("none");
      })

    }, {once: true }))
}

window.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  callEvents();
});

function callEvents(){
  changeRating();
  newRating();
  reviewEvent();
  modalEvents();
  storyDropdownEvents();
  subscribeEvents()
  recDetailsEvents()
  detailChangeEvents()
  detailEventListeners()
}