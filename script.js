const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 295,
        // read: false
    },
    {
        title: "Naruto",
        author: "Weeb",
        pages: 100,
        // read: false
    }
];

const bookCardsContainer = document.querySelector(".book-cards");

let bookCard = document.createElement("div");
bookCard.classList.add("book-card");
let bookTitle = document.createElement("div");
bookTitle.classList.add("book-title");
let bookAuthor = document.createElement("div");
bookAuthor.classList.add("book-author");
let bookPages = document.createElement("div");
bookPages.classList.add("book-pages");
// bookCard.appendChild(bookTitle);
// bookCard.appendChild(bookAuthor);
// bookCard.appendChild(bookPages);

// myLibrary.forEach((book) => {
//     for(i=0 ; i<myLibrary.length; i++) {
//     bookTitle.textContent = myLibrary[i].title;
//     bookAuthor.textContent = myLibrary[i].author;
//     bookPages.textContent = myLibrary[i].pages;
//     bookCardsContainer.appendChild(bookCard);
//     console.log(book);
//     }
// })

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
}


function addBookToLibrary() {
    let title = bookTitle.textContent;
    let author = bookAuthor.textContent;
    let pages = bookPages.textContent;
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}
addBookToLibrary()

function createBookCard() {
    console.log(myLibrary)
    for(i=0; i<myLibrary.length; i++) {
        bookTitle.textContent = myLibrary[i].title;
        bookAuthor.textContent = myLibrary[i].author;
        bookPages.textContent = myLibrary[i].pages;
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        console.log(bookCard);
    }
}
createBookCard()

// function displayBooks() { 
//     myLibrary.forEach((book) => console.log(book))

//     for(i=0 ; i<myLibrary.length; i++) {
//         // bookTitle.textContent = myLibrary[i].title;
//         // bookAuthor.textContent = myLibrary[i].author;
//         // bookPages.textContent = myLibrary[i].pages;
//         // bookCardsContainer.appendChild(bookCard);
       
//         // bookCardsContainer.appendChild(myLibrary[i]);
//     }
//     // console.log(myLibrary[0].title)
//     // console.log(bookTitle);
//     // console.log(myLibrary[0].author)
//     // console.log(bookAuthor);
//     // console.log(myLibrary[0].pages)
//     // console.log(bookPages);
//     // console.log(myLibrary[0]);
//     // console.log(bookCard);
// }
// displayBooks();