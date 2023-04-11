let isAccountLocked = false
let userRole = 'user'  

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') { 
    console.log('Welcome Admin!')
} else {
    console.log('Welcome!')
} 

// Challenge Area

let temp = 45

if (temp <= 32) {
    console.log('It is freezing outside!')
} else if (temp >= 110){
    console.log('It is hot af outside!')
} else {
    console.log("It's pretty nice outside!")
}

// It is freezing outside!
// It is hot af outside!
// It's pretty nice outside!