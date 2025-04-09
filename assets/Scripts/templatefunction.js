function getCardTemplate(bookIndex) {
    const cardRef = document.getElementById("read-books-content");

    cardRef.innerHTML += `<div id="book${bookIndex}" class="book-card"></div>`;
}


function getBookCard(bookIndex) {
    return `
    <h3 class="padding-20">${books[bookIndex].name}</h3>

    <img class= "book-img" src="${books[bookIndex].cover}"/>

    <div id="book-infos${bookIndex}" class="book-infos padding-20">
        <div
            id="price-and-likes${bookIndex}"
            class="price-and-likes"
        >
            <span class="price" id="price${bookIndex}">${books[bookIndex].price} &euro;</span>

            <div id="likes${bookIndex}" class="likes">
                <span id="like-counter${bookIndex}">${books[bookIndex].likes}</span
                ><img
                    id="heart-img${bookIndex}"
                    src="assets/icons/empty_heart.png"
                    alt=""
                />
            </div>
        </div>

        <div id="book-info-list" class="info-list${bookIndex}">
            <div class="info-pair">
                <span class="bold">Author:</span>
                <span>&nbsp;&nbsp;&nbsp;${books[bookIndex].author}</span>
            </div>
            <div class="info-pair">
                <span class="bold">Year:</span
                ><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${books[bookIndex].publishedYear}</span>
            </div>
            <div class="info-pair">
                <span class="bold">Genre:</span
                ><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${books[bookIndex].genre}</span>
            </div>
        </div>
    </div>

    <h4 class="padding-20">Comments</h4>

    <div    
        id="comment-section${bookIndex}"
        class="comment-section"
    >
        <div
            class="comment-content"
            id="comment-content${bookIndex}"
        >

        </div>
    </div>

    <form class="padding-20">
        <input
            type="text"
            id="comment-input${bookIndex}"
            required
        />
        <img
            class="hover-glow"
            src="./assets/icons/sent.png"
            onclick="addComment()"
        />
    </form>`
}


function getCommentTemplate(commentIndex, bookIndex){
    return `<div
            class="comment-content"
            id="b${bookIndex}-comment${commentIndex}"
        >
            <span class="reader bold" id="reader-b${bookIndex}-comment${commentIndex}"
                >${books[bookIndex].comments[commentIndex].name}</span
            >
            <span class="comment" id="comment-b${bookIndex}-comment${commentIndex}"
                >${books[bookIndex].comments[commentIndex].comment}</span
            >
        </div>`
}