//let myLibrary = [];
let bookAmount = 1;
let rowNumber = 1;


// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.identifier = title + author;
    let bookNumber;

    this.setBookNumber = function() {
        bookNumber = bookAmount;
    }

    this.getBookNumber = function() {
        return bookNumber;
    }
   
    
}

function addBookToLibrary(book) {

    // this adds book to library array
    book.setBookNumber();
    //myLibrary.push(book);

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
    submitButton.id = "submitButton";
    submitButton.innerHTML = "Submit";
    submitButton.addEventListener("click", function() { submit(titleInput.value, authorInput.value, pagesInput.value, readInputFalse, readInputTrue) });
    parent.appendChild(submitButton);

    // Create Clear button
    let clearButton = document.createElement("button");
    clearButton.innerHTML = "Clear";
    clearButton.addEventListener("click", function() { clear() });
    parent.appendChild(clearButton);

    // disable addBook Button
    let bookButton = document.getElementById("addBook");
    bookButton.disabled = true;
}


function submit(title, author, pages, readfalse) {
    let read = false;
    if (readfalse.checked == false) {
        read = true;
    }
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
}

function clear() {
    let form = document.getElementById("bookForm");
    form.reset();
}

// create function for Book object to show library in table. 
// Not sure if it needs to be part of the Book object or just on its own
function displayBookInTable(book) {
    let table = document.getElementById("libraryTable");
    let row = table.insertRow();
    row.id = "row" + rowNumber;

    //let cellIndex = row.insertCell(0)
    let cellTitle = row.insertCell(0);
    let cellAuthor = row.insertCell(1);
    let cellPages = row.insertCell(2);
    let cellRead = row.insertCell(3);
    
    // read status button 
    //let cellReadStatus = row.insertCell(4);
    // delete button
    //let cellDelete = row.insertCell(5);

    
    //cellIndex.innerHTML = book.getBookNumber();
    cellTitle.innerHTML = book.title;
    cellAuthor.innerHTML = book.author;
    cellPages.innerHTML = book.pages;

    // Set read status to yes or no, instead of true or false
    let isRead;
    if (book.read == true) {
        isRead = "Yes";
    }
    else {
        isRead = "No";
    }
    cellRead.innerHTML = isRead;

    // read status button
    let statusButton = document.createElement("BUTTON");
    statusButton.addEventListener("click", function() {readStatus(row, book)});
    let statusText = document.createTextNode("Change Read Status");
    statusButton.appendChild(statusText);
    //cellReadStatus.appendChild(statusButton);


    // delete button
    let deleteButton = document.createElement("BUTTON");
    deleteButton.addEventListener("click", function() {deleteBook(row, book)});
    let buttonText = document.createTextNode("Delete");
    deleteButton.appendChild(buttonText);
    //cellDelete.appendChild(deleteButton);
   // cellDelete.id = "cellDelete";
    rowNumber++;
    
    // edit button
    let editButton = document.createElement("BUTTON");
    editButton.addEventListener("click", function() {edit(statusButton, deleteButton, book.title)});
    let editText = document.createTextNode("Edit");
    editButton.appendChild(editText);
    let cellEdit = row.insertCell(4);
    cellEdit.appendChild(editButton);
}

function edit(statusButton, deleteButton, bookTitle) {
    let editDiv = document.createElement("div");
    editDiv.id = "editDiv";
    let editTitle = document.createTextNode("Edit " + bookTitle);
    editDiv.appendChild(editTitle);
    editDiv.appendChild(statusButton);
    editDiv.appendChild(deleteButton);
    document.body.appendChild(editDiv);
}

function deleteBook(row) {
    let rowForDeletion = document.getElementById(row.id);
    //double check they want to delete row
    let text = "Are you sure you want to delete this book?";
    if (confirm(text) == true) {
        rowForDeletion.remove();
    }
  
}


// change read status
function readStatus(row, book) {
    let bookStatus;
    if (book.read == true) {
        book.read = false;
        bookStatus = "No";
    }
    else {
        book.read = true;
        bookStatus = "Yes";
    }
    row.cells[3].innerHTML = bookStatus;
}



