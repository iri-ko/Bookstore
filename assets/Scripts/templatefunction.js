function getCardTemplate(bookIndex) {
    const cardRef = document.getElementById("read-books-content");

    cardRef.innerHTML += `<div id="book${bookIndex}" class="book-card"></div>`;
}

function getTitle(bookIndex){
    const innerCardRef = document.getElementById(`book${bookIndex}`);
    innerCardRef.innerHTML += `<h3 class="padding-20">${books[bookIndex].name}</h3>`
}

function getBookImg(bookIndex) {
    const innerCardRef = document.getElementById(`book${bookIndex}`);
    const imgElement = document.createElement("img"); 
    imgElement.src = "./assets/img/book.png";

    innerCardRef.appendChild(imgElement);
}

function getBoxTemplate(bookIndex){
    const innerCardRef = document.getElementById(`book${bookIndex}`);

    const infoDivElement = document.createElement("div");

    infoDivElement.id = `book-infos${bookIndex}`;
    infoDivElement.classList.add("book-infos");
    infoDivElement.classList.add("padding-20");

    innerCardRef.appendChild(infoDivElement);
}

function createPriceAndHeart(bookIndex){
    const infoRef = document.getElementById(`book-infos${bookIndex}`);

    infoRef.innerHTML += `<div id="price-and-likes${bookIndex}"
                                    class="price-and-likes">
                                    <span class="price" id="price${bookIndex}">${books[bookIndex].price} &euro;</span>
                                    <div id="likes" class="likes">
                                        <span id="like-counter">${books[bookIndex].likes}</span
                                        ><img
                                            id="heart-img"
                                            src="assets/icons/empty_heart.png"
                                            alt=""
                                        />
                                    </div>
                                </div>`
}

function createGeneralInfo(bookIndex){
    const infoRef = document.getElementById(`book-infos${bookIndex}`);

    const generalInfoDiv = document.createElement("div");
    generalInfoDiv.id = `book-info-list${bookIndex}`;
    generalInfoDiv.classList.add("info-list");
    generalInfoDiv.innerHTML =  ` <div class="info-pair">
                                        <span class="bold">Author:</span>
                                        <span>${books[bookIndex].author}</span>
                                    </div>
                                    <div class="info-pair">
                                        <span class="bold">Year:</span>
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${books[bookIndex].publishedYear}</span>
                                    </div>
                                    <div class="info-pair">
                                        <span class="bold">Genre:</span>
                                        <span>&nbsp;${books[bookIndex].genre}</span>
                                    </div>`

    infoRef.appendChild(generalInfoDiv);                               

}

function getCommentBoxTemplate(bookIndex){
    const innerCardRef = document.getElementById(`book${bookIndex}`);

    const commentDivElement = document.createElement("div");

    commentDivElement.id = `comment-section${bookIndex}`;
    commentDivElement.classList.add("comment-section");
    commentDivElement.classList.add("padding-20");

    innerCardRef.appendChild(commentDivElement);
}

function renderComments(bookIndex){
    const commentRef = document.getElementById(`comment-section${bookIndex}`);
    commentRef.innerHTML = ""

    for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
        
        commentRef.innerHTML += `<div
                                    class="comment-content"
                                    id="comment-content${bookIndex}"
                                >
                                    <span class="reader bold" id="reader"
                                        >${books[bookIndex].comments[commentIndex].name}</span
                                    >
                                    <span class="comment" id="comment"
                                        >${books[bookIndex].comments[commentIndex].comment}</span
                                    >
                                </div>`
        
    }
}