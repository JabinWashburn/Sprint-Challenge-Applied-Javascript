// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    console.log(response);
    let articles =  response.data.articles;
    let cardParent = document.querySelector('.cards-container');
    for (let i = 0; i < Object.keys(articles).length; i++) {
        key = Object.keys(articles)[i];
        articleArray = articles[key];
       articleArray.forEach((item) => { 
           let newCard = Card(item);
           cardParent.appendChild(newCard);
       })
    }
})



function Card (data){
    console.log(data);
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgSrc = document.createElement('img');
    const name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = data.headline;
    imgSrc.src = data.authorPhoto;
    name.textContent = data.authorName;

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    author.append(name);
    imgContainer.append(imgSrc);
    



    return card;

}

const newCard = document.querySelector('.cards-container');