import { reviewUpdate, setNewAttribute } from './story-utils.js';


import { 
  detailChangeEvents,
  modalEvents, 
  storyDropdownEvents,
  subscribeEvents,
  recDetailsEvents,
  changeRating,
  newRating
 } from './story-events.js';

function singleStoryDetail(id, attr){
  const minus = document.querySelector(`#m-${attr}-${id}`)
  if (minus){
    minus.addEventListener("click", (e)=> {
      const ele = e.target.parentElement.children[2];
      const id = parseInt(e.target.id.split("-")[2], 10);
      const attr = e.target.classList[2];
      setNewAttribute(ele, -1, id, attr)
    })
  }
  const plus = document.querySelector(`#p-${attr}-${id}`)
  if (plus){
    plus.addEventListener("click", (e)=> {
      const ele = e.target.parentElement.children[2];
      const id = parseInt(e.target.id.split("-")[2], 10);
      const attr = e.target.classList[2];
      setNewAttribute(ele, 1, id, attr)
    })
  }
}
// let currStories = document.querySelector('.currStories').innerHTML;
// currStories = JSON.parse(currStories);
// console.log(currStories[0]);

//

function detailInputChange(e){
  const oldChildren = e.target.parentElement.innerHTML;
  const oldEle = e.target.parentElement.children[0].innerHTML;
  const oldValue = e.target.innerHTML;
  const type = e.target.classList[1];
  const id = e.target.id;
  const parent = e.target.parentElement;
  parent.innerHTML = `
    <span class="detail-label">${oldEle}</span>
    <input class="detail-value-input" type="text" placeholder="${oldValue}"/>
  `
  const input = document.querySelector('.detail-value-input')
  
  input.addEventListener("keypress", async (e)=> {
    let book = '';
    let chapter = '';
    if (type === 'book') book = e.target.value;
    else if (type === 'chapter') chapter = e.target.value;
    if (e.key === "Enter"){
      const res = await fetch('/stories/subscriptions/update', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ id, book, chapter }),
      })
      const data = await res.json();
      let elements = '';
      if (type === 'book')elements = dashStoryDetail('Book:', data.subscription.book, id, type);
      if (type === 'chapter') elements = dashStoryDetail('Chapter:', data.subscription.chapter, id, type);
      parent.innerHTML = elements;
      if(parent.children[2]){
        parent.children[2].addEventListener("click", (e) => detailInputChange(e));
      } else {
        parent.children[1].addEventListener("click", (e) => detailInputChange(e));
      }
      singleStoryDetail(id, type);
    }
  })

  input.addEventListener("blur", (e) => {
    e.target.parentElement.innerHTML = oldChildren;
  })
}

function detailEventListeners() {
  document.querySelectorAll(".detail-value")
    .forEach(ele => ele.addEventListener("click", (e) => detailInputChange(e)))
}

// Search Functions

const searchBar = document.querySelector(".search");
const dashList = document.querySelector(".stories-container ul");

function dashStoryDetail(label, value, id, attr){
  const num = parseInt(value, 10);
  
  return (num >= 0) ?
    `
      <span class="detail-label">${label}</span>
      <span id="m-${attr}-${id}" class="fas fa-minus-circle ${attr}"></span>
      <span id=${id} class="detail-value ${attr}">${value}</span>
      <span id="p-${attr}-${id}" class="fas fa-plus-circle ${attr}"></span>
    ` :
    `
      <span class="detail-label">${label}</span>
      <span id=${id} class="detail-value ${attr}">${value}</span>
    ` ;
  // return `
  //   <div class="detail-container">
  //     ${content}
  //   </div>
  // `
}

function DashSearchRating(recommendation){
  let i = 0, j = recommendation.rating + 1;
  let results = []
  while (i < recommendation.rating){
    results.push(`<span id=${i+1} class="fas fa-star")></span>`);
    i++;
  }
  while (j <= 5){
    results.push(`<span id=${j} class="far fa-star")></span>`);
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
            <div id=${story.id} class="stars">
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