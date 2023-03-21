let myLibrary = [];
let bookAmount = 1;
let bookNumber= 1;


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
        sentence = sentence + hasRead + bookNumber;

        return sentence;

    }

    this.setBookNumber = function() {
        bookNumber = bookAmount;
    }

    
}

function addBookToLibrary(book) {

    // this adds book to library array
    book.setBookNumber();
    myLibrary.push(book);

    book.setBookNumber();
    // adds book to HTML library table
    displayBookInTable(book);
    bookAmount++;

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
    let readTrue = document.createElement("label");
    readTrue.id = "readTrue";
    readTrue.innerHTML = "Read: ";
    
    let readInputTrue = document.createElement("input");
    readInputTrue.id = "readInputTrue";
    readInputTrue.type = "radio";
    readInputTrue.value = true;
    // name has to be the same for both radio buttons
    readInputTrue.name = "read";
    readTrue.appendChild(readInputTrue);
    form.appendChild(readTrue);

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
    submitButton.addEventListener("click", function() { submit(titleInput.value, authorInput.value, pagesInput.value, readInputFalse, readInputTrue) });
    parent.appendChild(submitButton);


}


function submit(title, author, pages, readfalse) {
    let read = false;
    if (readfalse.checked == false) {
        read = true;
    }
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
}

// create function for Book object to show library in table. 
// Not sure if it needs to be part of the Book object or just on its own
function displayBookInTable(book) {
    let table = document.getElementById("libraryTable");
    let row = table.insertRow();
    

    let cellIndex = row.insertCell(0)
    let cellTitle = row.insertCell(1);
    let cellAuthor = row.insertCell(2);
    let cellPages = row.insertCell(3);
    let cellRead = row.insertCell(4);
    
    // edit button
    let cellEdit = row.insertCell(5);

    row.value = book;
    cellIndex.innerHTML = bookNumber;
    cellTitle.innerHTML = book.title;
    cellAuthor.innerHTML = book.author;
    cellPages.innerHTML = book.pages;
    cellRead.innerHTML = book.read;

    // edit button
    let editButton = document.createElement("BUTTON");
    let buttonText = document.createTextNode("Edit");
    editButton.appendChild(buttonText);
    cellEdit.appendChild(editButton);
    

    
}

function editBook(book) {
    // edit read status
    
    // remove book
}

