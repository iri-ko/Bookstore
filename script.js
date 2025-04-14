// #region Arrays

let books = [
    {
        name: "Die Geheimnisse des Ozeans",
        cover: "./assets/img/geheimnisse.png",
        author: "Clara Meer",
        likes: 1250,
        liked: false,
        price: "19,99",
        publishedYear: 2018,
        genre: "Fantasy",
        comments: [
            {
                name: "Leser123",
                comment:
                    "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
            },
            {
                name: "Bookworm84",
                comment:
                    "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
            },
            {
                name: "FantasyFanatic",
                comment:
                    "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
            },
            {
                name: "SciFiGuru",
                comment:
                    "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
            },
            {
                name: "NovelLover",
                comment:
                    "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
            },
        ],
    },
    {
        name: "Der vergessene Pfad",
        cover: "./assets/img/pfad.png",
        author: "Maximilian Schwarz",
        likes: 980,
        liked: false,
        price: "14,50",
        publishedYear: 2021,
        genre: "Fantasy",
        comments: [],
    },
    {
        name: "Die Farben des Himmels",
        cover: "./assets/img/himmel.png",
        author: "Laura Blau",
        likes: 1520,
        liked: false,
        price: "22,95",
        publishedYear: 2019,
        genre: "Romantik",
        comments: [
            {
                name: "LeserPeter",
                comment:
                    "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
            },
            {
                name: "BookLover21",
                comment:
                    "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
            },
            {
                name: "FantasyNerd",
                comment:
                    "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
            },
            {
                name: "SciFiEnthusiast",
                comment:
                    "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
            },
            {
                name: "ReadingAddict",
                comment:
                    "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
            },
        ],
    },
    {
        name: "Das Rätsel der Zeit",
        cover: "./assets/img/zeit.png",
        author: "Alexander Weiss",
        likes: 750,
        liked: false,
        price: "18,00",
        publishedYear: 2020,
        genre: "Science-Fiction",
        comments: [
            {
                name: "BuchKenner",
                comment:
                    "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
            },
            {
                name: "LeseWurm",
                comment:
                    "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
            },
        ],
    },
    {
        name: "Der letzte Wächter",
        cover: "./assets/img/waechter.png",
        author: "Sabine Grün",
        likes: 1300,
        liked: false,
        price: "16,75",
        publishedYear: 2017,
        genre: "Fantasy",
        comments: [],
    },
    {
        name: "Im Schatten des Mondes",
        cover: "./assets/img/mond.png",
        author: "Philipp Silber",
        likes: 890,
        liked: false,
        price: "12,30",
        publishedYear: 2022,
        genre: "Science-Fiction",
        comments: [
            {
                name: "BücherLiebhaber",
                comment:
                    "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
            },
            {
                name: "Leseratte",
                comment:
                    "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
            },
        ],
    },
    {
        name: "Jenseits der Sterne",
        cover: "./assets/img/sterne.png",
        author: "Oliver Schwarz",
        likes: 1450,
        liked: false,
        price: "21,00",
        publishedYear: 2015,
        genre: "Science-Fiction",
        comments: [
            {
                name: "Leser123",
                comment:
                    "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
            },
        ],
    },
    {
        name: "Das verborgene Königreich",
        cover: "./assets/img/reich.png",
        author: "Elena Gold",
        likes: 920,
        liked: false,
        price: "17,50",
        publishedYear: 2020,
        genre: "Fantasy",
        comments: [
            {
                name: "Bookworm92",
                comment:
                    "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
            },
        ],
    },
    {
        name: "Liebe in Zeiten des Krieges",
        cover: "./assets/img/liebe.png",
        author: "Emilia Rot",
        likes: 1800,
        liked: false,
        price: "19,99",
        publishedYear: 2016,
        genre: "Romantik",
        comments: [
            {
                name: "Bibliophile23",
                comment:
                    "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
            },
            {
                name: "StorySeeker",
                comment:
                    "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
            },
            {
                name: "SciFiExplorer",
                comment:
                    "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
            },
        ],
    },
];

let favoriteBooks = [];

// #endregion

function init() {
    const savedBooks = loadFromLocalStorage("books");
    const savedFavoriteBooks = loadFromLocalStorage("favoriteBooks");

    if (savedBooks) books = savedBooks; 
    if (savedFavoriteBooks) favoriteBooks = savedFavoriteBooks;

    renderBookCards();
    renderFavoriteBookCards();
}
// #region render functions

function renderBookCards() {
    const cardRef = document.getElementById("read-books-content");
    cardRef.innerHTML = "";

    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        getCardTemplate(bookIndex);
        const innerCardRef = document.getElementById(`book${bookIndex}`);

        innerCardRef.innerHTML = "";
        innerCardRef.innerHTML += getBookCard(bookIndex);

        renderCommentBox(bookIndex);
        renderLikeContainer(bookIndex);
    }
}

function renderFavoriteBookCards() {
    const favCardRef = document.getElementById("favorite-books-content");

    //show inner html - either show liked books or hint that no books hae been liked
    if (favoriteBooks.length == 0) {
        favCardRef.innerHTML = "Du hast noch keine Bücher geliked.";
    } else {
        favCardRef.innerHTML = "";
        renderFavoriteBookCardsLoop();
    }
}

//change between justify-contentflex start or space between depending on number of books liked
function toggleJustifyContentClass() {
    const favCardRef = document.getElementById("favorite-books-content");
    if (favoriteBooks.length <= 2) {
        favCardRef.classList.add("justify-start");
        favCardRef.classList.remove("justify-sp-between");
    } else {
        favCardRef.classList.add("justify-sp-between");
        favCardRef.classList.remove("justify-start");
    }
}

function renderFavoriteBookCardsLoop() {
    for (
        let favBookIndex = 0;
        favBookIndex < favoriteBooks.length;
        favBookIndex++
    ) {
        getFavBookContainer(favBookIndex);

        const innerFavCardRef = document.getElementById(
            `favorite-book${favBookIndex}`
        );

        innerFavCardRef.innerHTML = "";
        innerFavCardRef.innerHTML += getFavBookCard(favBookIndex);

        renderFavCommentBox(favBookIndex);
    }
    toggleJustifyContentClass();
}

function renderCommentBox(bookIndex) {
    const commentRef = document.getElementById(`comment-section${bookIndex}`);
    for (
        let commentIndex = 0;
        commentIndex < books[bookIndex].comments.length;
        commentIndex++
    ) {
        commentRef.innerHTML += getCommentTemplate(commentIndex, bookIndex);
    }
}

function renderFavCommentBox(favBookIndex) {
    const commentRef = document.getElementById(`comment-section${favBookIndex}`);
    for (
        let FavCommentIndex = 0;
        FavCommentIndex < favoriteBooks[favBookIndex].comments.length;
        FavCommentIndex++
    ) {
        commentRef.innerHTML += getFavCommentTemplate(FavCommentIndex, favBookIndex);
    }
}

// #endregion

// #region Like Functions

function setLike(id) {
    const likeIndex = findHeartIndex(id);
    if (books[likeIndex].liked == false) {
        books[likeIndex].liked = true;
        addToFavoriteBooks(likeIndex);
    } else if ((books[likeIndex].liked = true)) {
        books[likeIndex].liked = false;
        removeFromFavoriteBooks(likeIndex);
    }
    renderLikeContainer(likeIndex);
    renderFavoriteBookCards();
    renderLikeContainer(likeIndex);
}

function addToFavoriteBooks(likeIndex) {
    favoriteBooks.push(books[likeIndex]);
    saveToLocalStorage("favoriteBooks", favoriteBooks);
}

function removeFromFavoriteBooks(likeIndex) {
    favoriteBooks.splice(likeIndex, 1);
    saveToLocalStorage("favoriteBooks", favoriteBooks);
}

function findHeartIndex(id) {
    const heartRef = document.getElementById(id);
    const heartIndex = heartRef.id.replace("heart-img", "");
    return heartIndex;
}

function renderLikeContainer(bookIndex) {
    const likesRef = document.getElementById(`likes${bookIndex}`);
    if (books[bookIndex].liked == true) {
        likesRef.innerHTML = getAddLikeTemplate(bookIndex);
    } else if (books[bookIndex].liked == false) {
        likesRef.innerHTML = getNotLikeTemplate(bookIndex);
    }
}

//#endregion

// #region comment functions

function addComment(id) {
    const inputRef = document.getElementById(id); //from rendered containers

    const inputIndex = inputRef.id.replace("comment-input", ""); //to get Index, to find book in array
    
    pushComment(inputIndex, inputRef);

    const commentRef = document.getElementById(`comment-section${inputIndex}`);
    commentRef.innerHTML= "";   //empty comment box to avoid double comments


    renderBookCards();
    renderFavoriteBookCards();
    

}

function pushComment(inputIndex, inputRef) {
    const newComment = createCommentsObject(inputRef);
    books[inputIndex].comments.push(newComment);

    // Save updated books and favoriteBooks arrays to local storage
    saveToLocalStorage("books", books);
    saveToLocalStorage("favoriteBooks", favoriteBooks);
}

function createCommentsObject(inputRef) {
    const nameInput = "CurrentUser"; // Replace with dynamic username later
    const commentInput = inputRef.value.trim(); //get and safe comment

    //creating new object to push to both arrays
    const newComment = {
        name: nameInput,
        comment: commentInput,
    };

    return newComment;
}

//#endregion


//#region Local Storage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data)); // Convert data to JSON string and save
}

function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key); // Retrieve the JSON string
    if (data) {
        return JSON.parse(data); // Parse the JSON string if data exists
    } else {
        return null; // Return null if data is falsy
    }
}
//#endregion


//#region Username functionality

function addUserName(){
    toggleVisibility();
}

function toggleVisibility(){
    const overlayRef = document.getElementById('overlay')
    overlayRef.classList.remove('d-flex');
    overlayRef.classList.add('d-none');
}

//#endregion
