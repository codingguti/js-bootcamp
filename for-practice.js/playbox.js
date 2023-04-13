const sum_array = function (list) {
    let sum = 0
    for (let i = 0; i < list.length; i++) {
        sum += list[i]
    }
    return sum 
}

let test = sum_array([6,2,3])
console.log(test)


const string_seperate = function (str) {
    let text = ''
    let i = 0
    for (; i < str.length; i++) {
        text += '\n' + str[i] + '\n'
    }
    return text
}

let test2 = string_seperate('bofa')

console.log(test2)
