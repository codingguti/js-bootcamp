let greetUser = function (str1) {
    console.log('Welcome ' + str1 + '!')
}

greetUser('Danny')

let square = function (num) {
    let result = num*num
    return result
}

let value = square(3)

console.log(value)


// Challenge area

// Convert Fahrenheit to Celsius

// 32 -> 0; 68-> 20

let FahrToCels = function (num) {
    let Cels = ((num - 32) * 5) / 9 
    return Cels
}

let temp_converter = FahrToCels(32)
let temp_converter2 = FahrToCels(68)

console.log(temp_converter)
console.log(temp_converter2)