let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let sentence = title + " by " + author + ", " + pages + " pages, ";
        let hasRead = "";
        if (read == true) {
            hasRead = "has been read.";
        }
        else {
            hasRead = "not read yet.";
        }
        sentence = sentence + hasRead;

        return sentence;

    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.id = "book" + i;
        let newBook = myLibrary[i].info();
        let content = document.createTextNode(newBook);
        book.appendChild(content);

        let bookCollection = document.getElementById("bookCollection");
        bookCollection.appendChild(book);
    }
}

let theHobbit = new Book("the hobbit", "JRRTolkein", 300, false);
addBookToLibrary(theHobbit);
let daVinciCode = new Book("da vinci code", "dan brown", 100, true);
addBookToLibrary(daVinciCode);

displayBooks();