const commentsArray = [
    {
        name:"Connor Walton",
        date:"02/17/2021",
        comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    }, 
    {
        name:"Emilie Beach",
        date:"01/09/2021",
        comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name:"Miles Acosta",
        date:"12/20/2020",
        comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

const comments = document.createElement("div");
comments.classList.add("comments");

// comments.innerText ="";
function displayComment(commentObj){
    const commentCard = document.createElement("article");
    const commentHeader = document.createElement("div");
   
    const commentName = document.createElement("p");
    const commentTime = document.createElement('p');
    const commentText = document.createElement("p");
    const commentImg = document.createElement("img"); //add img
    // commentImg.src = "./assets/Images/Mohan-muruge.jpg";
    commentName.innerText = commentObj.name;
    commentTime.innerText = commentObj.date;
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
    commentCard.appendChild(commentHeader);
    commentCard.appendChild(commentText);
    comments.appendChild(commentCard);


    document.querySelector("main").appendChild(comments);
    

}
function displayAllComments(commentsArray){
    for(let i = 0; i<commentsArray.length; i++){
        displayComment(commentsArray[i]);
    }

}

displayAllComments(commentsArray);


const form = document.getElementById("myForm");

form.addEventListener('submit', function(e){
    e.preventDefault();
    formName = e.target.name.value;
    formMessage = e.target.message.value;

    const newComment = {
        name: formName,
        date: "10/10/2023" ,
        comment: formMessage
    }

    document.querySelector(".comments").innerText = "";


    commentsArray.splice(0,0,newComment)

    displayAllComments(commentsArray);
    document.getElementById("myForm").reset();
    
});

