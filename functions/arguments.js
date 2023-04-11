let getScoreText = function (name = 'Anon', score = '0') {
    return 'Name : ' + name + ' | Score : ' + score
}

let scoreText = getScoreText('Danny', '60')
console.log(scoreText)

// Challenge Area
// TipPercent

let TipCalculator = function (bill, tip) {
    let finalTip = tip + 1
    let finalBill = bill * finalTip
    return finalBill
}

let tipvalue1 = TipCalculator(100, .2)

console.log(tipvalue1)