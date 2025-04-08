function getTitleTemplate() {
    const readREF = document.getElementById("read-books-content");
    readREF.innerHTML = "";

    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        readREF.innerHTML += `<div id="book${bookIndex}" class="book-card">
                            <h3 class="padding-20">${books[bookIndex].name}</h3>
                            </div>`;
    }
}