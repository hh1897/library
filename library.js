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

function addBookForm() {
    // Create form 
    let form = document.createElement("FORM");
    form.id = "bookForm";
    
    // Create title input
    let title = document.createElement("label");
    title.id = "title";
    title.innerHTML = "Title: ";
    
    let titleInput = document.createElement("input");
    titleInput.type = "text";
    title.appendChild(titleInput);
    form.appendChild(title);

    // Author input
    let author = document.createElement("label");
    author.id = "author";
    author.innerHTML = "Author: ";
    
    let authorInput = document.createElement("input");
    authorInput.type = "text";
    author.appendChild(authorInput);
    form.appendChild(author);
    
    // Pages input
    let pages = document.createElement("label");
    pages.id = "pages";
    pages.innerHTML = "Pages: ";
    
    let pagesInput = document.createElement("input");
    pagesInput.type = "number";
    pages.appendChild(pagesInput);
    form.appendChild(pages);

    // Read input
    let read = document.createElement("label");
    read.id = "read";
    read.innerHTML = "Read: ";
    
    let readInput = document.createElement("input");
    readInput.type = "checkbox";
    read.appendChild(readInput);
    form.appendChild(read);

    // Append form to existing HTML div at the end 
    let parent = document.getElementById("formParent");
    parent.appendChild(form);
}





let theHobbit = new Book("the hobbit", "JRRTolkein", 300, false);
addBookToLibrary(theHobbit);
let daVinciCode = new Book("da vinci code", "dan brown", 100, true);
addBookToLibrary(daVinciCode);

displayBooks();