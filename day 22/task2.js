// Add a method describe() that prints the book details.
let book = {
    title : "Marvel",
    author : "Stan lee",
    pages : 500,
 
    describe(){
                console.log(`${book.title} written by ${book.author} which consists of ${book.pages} pages`);
    }
};
book.describe();
 