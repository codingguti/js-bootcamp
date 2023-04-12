// students score, total possible score
// 15/20 is 75% -> you got a C (75%)!
// A -> 90-100 B-> 80-89 C-> 70-79 D -> 60-69 F-> 0-59

let grade_calc = function (correct, total) {
    let grade = (correct / total) * 100
    let letter_grade = ''
    if (grade >= 90) {
        letter_grade = 'A'
    } else if (grade >= 80) {
        letter_grade = 'B'
    } else if (grade >= 70) {
        letter_grade = 'C'
    } else if (grade >= 60) {
        letter_grade = 'D'
    } else if (grade >= 0) {
        letter_grade = 'F'
    }

    return `You got a ${letter_grade} (${grade}%)`

}

let result = grade_calc(13,20)
console.log(result)