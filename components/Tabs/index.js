// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = [];
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then( response => {
    topics = response.data.topics;
    let parent = document.querySelector(".topics");
    topics.forEach((topic) => {
        newTopic = document.createElement("div");
        newTopic.classList.add("tab");
        newTopic.textContent = topic;
        parent.appendChild(newTopic);
    });
})
    .catch(error => {
        console.log('This error is your fault Jabin fix it', error);
    }); 

function TopicTab (data){
    const topic = document.createElement('div');

    topic.textContent = data.topics;

    topic.classList.add('tab');

    return topic;
} 
    const newTab = document.querySelector('.topic');

