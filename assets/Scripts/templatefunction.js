function getCardTemplate(bookIndex) {
    const cardRef = document.getElementById("read-books-content");

    cardRef.innerHTML += `<div id="book${bookIndex}" class="book-card"></div>`;
}

function getTitle(bookIndex){
    const innerCardRef = document.getElementById(`book${bookIndex}`);
    innerCardRef.innerHTML += `<h3 class="padding-20">${books[bookIndex].name}</h3>`
}
