let myBook = {
    title: '1984', 
    author: 'George Orwell', 
    page_count: 326
}

let otherBook = {
    title: "A People's History", 
    author: 'Howard Zinn', 
    page_count: 723
}


let bookInfo = function (book) {
    return `${book.title} by ${book.author} contains ${book.page_count} pages.`
}

let book1 = bookInfo(otherBook)

console.log(book1)