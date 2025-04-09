function getCardTemplate(bookIndex) {
    const cardRef = document.getElementById("read-books-content");

    cardRef.innerHTML += `<div id="book${bookIndex}" class="book-card"></div>`;
}

function getBookCard(bookIndex) {
    return `
    <h3 class="padding-20">Title</h3>

    <img src="./assets/img/book.png"/>

    <div id="book-infos${bookIndex}" class="book-infos padding-20">
        <div
            id="price-and-likes${bookIndex}"
            class="price-and-likes"
        >
            <span class="price" id="price${bookIndex}">Price</span>

            <div id="likes${bookIndex}" class="likes">
                <span id="like-counter${bookIndex}">xxxx</span
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
                <span>Authorname</span>
            </div>
            <div class="info-pair">
                <span class="bold">Year:</span
                ><span>xxxx</span>
            </div>
            <div class="info-pair">
                <span class="bold">Genre:</span
                ><span>xxxx</span>
            </div>
        </div>
    </div>

    <h4 class="padding-20">Comments</h4>

    <div
        id="comment-section${bookIndex}"
        class="comment-section padding-20"
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