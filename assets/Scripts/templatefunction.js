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
                <span id="like-counter${bookIndex}">${books[bookIndex].likes}</span>
                <img
                    id="heart-img${bookIndex}"
                    src="assets/icons/empty_heart.png"
                    alt=""
                    class= "heart-img"
                    onclick="setLike('heart-img${bookIndex}')"
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

    <h4 class="padding-20">Kommentare</h4>

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

function getFavCommentTemplate(FavCommentIndex, favBookIndex){
    return `<div
            class="comment-content"
            id="b${favBookIndex}-comment${FavCommentIndex}"
        >
            <span class="reader bold" id="reader-b${favBookIndex}-comment${FavCommentIndex}"
                >${favoriteBooks[favBookIndex].comments[FavCommentIndex].name}</span
            >
            <span class="comment" id="comment-b${favBookIndex}-comment${favBookIndex}"
                >${favoriteBooks[favBookIndex].comments[FavCommentIndex].comment}</span
            >
        </div>`
}

function getAddLikeTemplate(bookIndex){
    return `    <span id="like-counter${bookIndex}">${books[bookIndex].likes + 1}</span>
                <img
                    id="heart-img${bookIndex}"
                    src="assets/icons/full_heart.png"
                    alt=""
                    class= "heart-img"
                    onclick="setLike('heart-img${bookIndex}')"
                />
            `
}

function  getNotLikeTemplate(bookIndex){
    return `    <span id="like-counter${bookIndex}">${books[bookIndex].likes}</span>
                <img
                    id="heart-img${bookIndex}"
                    src="assets/icons/empty_heart.png"
                    alt=""
                    class= "heart-img"
                    onclick="setLike('heart-img${bookIndex}')"
                />
            `
}

function getFavBookContainer(favBookIndex){
    const FavCardRef = document.getElementById("favorite-books-content");

    FavCardRef.innerHTML += `<div id="favorite-book${favBookIndex}" class="border-pink book-card"></div>`;
}

function getFavBookCard(favBookIndex) {
    return `
    <h3 class="padding-20">${favoriteBooks[favBookIndex].name}</h3>

    <img class= "book-img" src="${favoriteBooks[favBookIndex].cover}"/>

    <div id="book-infos${favBookIndex}" class="book-infos padding-20">
        <div
            id="price-and-likes${favBookIndex}"
            class="price-and-likes"
        >
            <span class="price" id="price${favBookIndex}">${favoriteBooks[favBookIndex].price} &euro;</span>

            <div id="likes${favBookIndex}" class="likes">
                <span id="like-counter${favBookIndex}">${favoriteBooks[favBookIndex].likes + 1}</span>
                <img
                    id="heart-img${favBookIndex}"
                    src="assets/icons/full_heart.png"
                    alt=""
                    class= "heart-img"
                    onclick="setLike('heart-img${favBookIndex}')"
                />
            </div>
        </div>

        <div id="book-info-list" class="info-list${favBookIndex}">
            <div class="info-pair">
                <span class="bold">Author:</span>
                <span>&nbsp;&nbsp;&nbsp;${favoriteBooks[favBookIndex].author}</span>
            </div>
            <div class="info-pair">
                <span class="bold">Year:</span
                ><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${favoriteBooks[favBookIndex].publishedYear}</span>
            </div>
            <div class="info-pair">
                <span class="bold">Genre:</span
                ><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${favoriteBooks[favBookIndex].genre}</span>
            </div>
        </div>
    </div>

    <h4 class="padding-20">Kommentare</h4>

    <div    
        id="comment-section${favBookIndex}"
        class="comment-section"
    >
        <div
            class="comment-content"
            id="comment-content${favBookIndex}"
        >

        </div>
    </div>

    <form class="padding-20">
        <input
            type="text"
            id="comment-input${favBookIndex}"
            required
        />
        <img
            class="hover-glow"
            src="./assets/icons/sent.png"
            onclick="addComment()"
        />
    </form>`
}