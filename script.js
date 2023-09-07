let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 295,
        read: false
    },
    {
        title: "The Cat in the Hat",
        author: "Dr.Seuss",
        pages: 61,
        read: false
    }
];

let bookCardsContainer = document.querySelector(".book-cards-container");
let showButton = document.querySelector(".show-form");
let form = document.querySelector(".form-popup");
let submitButton = document.querySelector(".submit");
let cancelButton = document.querySelector(".cancel");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function displayBooks() {
    myLibrary.forEach((book) => {
        let bookCard = document.createElement("div");
        let bookTitle = document.createElement("div");
        let bookAuthor = document.createElement("div");
        let bookPages = document.createElement("div");
        let bookRead = document.createElement("button");
        let removeButton = document.createElement("button");

        bookCard.classList.add("book-card");
        bookTitle.classList.add("book-title");
        bookAuthor.classList.add("book-author");
        bookPages.classList.add("book-pages");
        bookRead.classList.add("book-read");
        removeButton.classList.add("remove-button");

        bookTitle.textContent = book.title;
        bookAuthor.textContent = `by ${book.author}`;
        bookPages.textContent = `${book.pages} pgs`;
        if(book.read) {
            bookRead.textContent = "read"
        } else {
            bookRead.textContent = "not read"
        }
        removeButton.textContent = "delete";

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        bookCard.appendChild(removeButton);
        bookCardsContainer.appendChild(bookCard);

        removeButton.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            clearAllBooks();
            displayBooks();
        });

        bookRead.addEventListener("click", () => {
            book.read = !book.read;
            clearAllBooks();
            displayBooks();
        });

    })
};

displayBooks();

showButton.addEventListener("click", () => {
    form.showModal();
});

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = false
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearAllBooks();
    addBookToLibrary();
    form.close();
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.close();
});

function clearAllBooks() {
    while(bookCardsContainer.hasChildNodes()) {
        bookCardsContainer.removeChild(bookCardsContainer.firstChild)
    }
};
