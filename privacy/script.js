let books = (function () {
    // Privacy variable
    let _bookName = 'javaScript';

    return {
        bookYear: 2000,
        get bookName() {
            return 'my favorite book is ' + _bookName;
        },
        set bookName(_val) {
            _bookName = _val;
        }
    }
})();

for (let book in books) {
    console.log(book);
}

console.log(books.bookYear);
console.log(books.bookName);

books.bookName = "Harry Potter";
console.log(books.bookName);

console.log(books._bookName);
