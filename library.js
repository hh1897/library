let myLibrary = [];
let displayed = false;

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
    pagesInput.min = 1;
    pages.appendChild(pagesInput);
    form.appendChild(pages);

    // Read input True
    let read = document.createElement("label");
    read.id = "read";
    read.innerHTML = "Read: ";
    
    let readInput = document.createElement("input");
    readInput.id = "readInput";
    readInput.type = "radio";
    readInput.value = true;
    readInput.name = "read";
    read.appendChild(readInput);
    form.appendChild(read);

    // Read Input False
    let readFalse = document.createElement("label");
    readFalse.id = "readFalse";
    readFalse.innerHTML = "Not Read: ";

    let readInputFalse = document.createElement("input");
    readInputFalse.id = "readInputFalse";
    readInputFalse.type = "radio";
    readInputFalse.value = false;
    readInputFalse.name = "read";
    readFalse.appendChild(readInputFalse);
    form.appendChild(readFalse);


    // Append form to existing HTML div at the end 
    let parent = document.getElementById("formParent");
    parent.appendChild(form);

    // Create submit button
    let submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.addEventListener("click", function() { submit(titleInput.value, authorInput.value, pagesInput.value, readInput.value) });
    parent.appendChild(submitButton);


}


function submit(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
}






