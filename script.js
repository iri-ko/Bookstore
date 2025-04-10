// #region meeine Variabeln

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

let currentBook = 0;

// #endregion

function init() {
    renderBookCards();
}


function renderBookCards() {

    const cardRef = document.getElementById("read-books-content");
    cardRef.innerHTML = "";

    for (let bookIndex = 0; bookIndex< books.length; bookIndex++) {
        getCardTemplate(bookIndex);
        const innerCardRef = document.getElementById(`book${bookIndex}`);

        innerCardRef.innerHTML = "";
        innerCardRef.innerHTML += getBookCard(bookIndex);
        
        renderCommentBox(bookIndex);
        renderLikeContainer(bookIndex);
    }
}


function renderCommentBox(bookIndex){
    const commentRef = document.getElementById(`comment-section${bookIndex}`);

    for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
            commentRef.innerHTML += getCommentTemplate(commentIndex, bookIndex);
    } 
}


function setLike(id){
    const likeIndex = findHeartIndex(id);
    
    if (books[likeIndex].liked == false){
        books[likeIndex].liked = true;
    }
    else {
        books[likeIndex].liked = false;
    };    

    renderLikeContainer(likeIndex);

}

function findHeartIndex(id){
    const heartRef = document.getElementById(id);
    const heartIndex = heartRef.id.replace("heart-img","");
    return heartIndex
}



function renderLikeContainer(bookIndex){
    const likesRef = document.getElementById(`likes${bookIndex}`);
    if (books[bookIndex].liked == true){
        likesRef.innerHTML= getAddLikeTemplate(bookIndex);
    }
    else if ((books[bookIndex].liked == false)) {
        likesRef.innerHTML= getNotLikeTemplate(bookIndex);
    }
}

// boolean liked = true
// render full heart img
// add 1 to counter
// push card to liked
// do not remove from read (because it's read and favorited)
// liked = false
// render empty heart img
// change counter back to liked value
// remove bookcard from favorited and array

// create array for favrorited - > necessary?



