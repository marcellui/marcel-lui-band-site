import {BandSiteAPI} from "./band-site-api.js"

const apiKey = "fb090a24-a346-489b-806e-999ee80c8a37"

const myBandSiteAPI =  new BandSiteAPI(apiKey);

let commentArray = [];


async function fetchComments(){
     commentArray = await myBandSiteAPI.getComments();
     const sortedArray = commentArray.sort((a,b) => b.timestamp-a.timestamp);
     displayAllComments(sortedArray);
}

 fetchComments();

 async function addComment(comment){
    const result = await myBandSiteAPI.postComment(comment);
 }




const comments = document.createElement("div");
comments.classList.add("comments");

function displayComment(commentObj){
    const commentCard = document.createElement("article");
    const commentHeader = document.createElement("div");
   
    const commentName = document.createElement("p");
    const commentTime = document.createElement('p');
    const commentContainer = document.createElement('div')
    const commentText = document.createElement("p");
    const commentImg = document.createElement("img"); 

    commentName.innerText = commentObj.name;
    commentTime.innerText = new Date(commentObj.timestamp).toLocaleDateString();
    commentText.innerText = commentObj.comment;
    
    commentCard.classList.add("comments__card")
    commentHeader.classList.add("comments__header")
    commentName.classList.add("comments__user-name");
    commentTime.classList.add("comments__user-time");
    commentText.classList.add("comments__user-text");
    commentImg.classList.add("comments__user-img");

    commentCard.appendChild(commentImg)
    commentHeader.appendChild(commentName);
    commentHeader.appendChild(commentTime);
    commentContainer.appendChild(commentHeader);
    commentContainer.appendChild(commentText);
    commentCard.appendChild(commentContainer);
    comments.appendChild(commentCard);


    document.querySelector("main").appendChild(comments);
    

}

function displayAllComments(commentsArray){
    for(let i = 0; i<commentsArray.length; i++){
        displayComment(commentsArray[i]);
    }

}




const form = document.getElementById("myForm");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const formName = e.target.name.value;
    const formMessage = e.target.message.value;

    const newComment = {
        name: formName,
        timestamp: Date.now().toLocaleDateString() ,
        comment: formMessage
    }

    const postComment = {
        name: formName,
        comment: formMessage
    } 

    console.log(newComment.date)
    document.querySelector(".comments").innerText = "";
    commentArray.unshift(newComment);
    console.log(commentArray);

    addComment(postComment);

    displayAllComments(commentArray);
    document.getElementById("myForm").reset();
    
});



var myDate = new Date(Date.now());
// document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());
console.log(myDate.toLocaleDateString())