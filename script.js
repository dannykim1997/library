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

myLibrary.forEach((book) => {
    let bookCard = document.createElement("div");
    let bookTitle = document.createElement("div");
    let bookAuthor = document.createElement("div");
    let bookPages = document.createElement("div");
    bookCard.classList.add("book-card");
    bookTitle.classList.add("book-title");
    bookAuthor.classList.add("book-author");
    bookPages.classList.add("book-pages");
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCardsContainer.appendChild(bookCard);
})

// function Book(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     // this.read = read;
// }


// function addBookToLibrary() {
//     let title = bookTitle.textContent;
//     let author = bookAuthor.textContent;
//     let pages = bookPages.textContent;
//     let newBook = new Book(title, author, pages);
//     myLibrary.push(newBook);
// }
// addBookToLibrary()


