// create book object

// constructor
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