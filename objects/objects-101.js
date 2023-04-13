let myBook = {
    title: '1984', 
    author: 'George Orwell', 
    page_count: 326
}

console.log(`${myBook.title} by ${myBook.author} contains ${myBook.page_count} pages.`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author} contains ${myBook.page_count} pages.`)

// Challenge Area 

// Model a person, include: name, age, location

// name is age and lives in location.

let person = {
    name: 'Danny',
    age: 24,
    location: 'NYC'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)

// Increase age by 1 then print message again.

person.age = person.age + 1

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)
