// Total Points

const body = document.getElementsByTagName('body')[0]
const points = document.getElementById('points')

var totalPoints = 0
points.innerText = `${totalPoints} P`

// Operations

const btnSumSubt = document.getElementById('btnSumSubt')
const btnMultDiv = document.getElementById('btnMultDiv')
const btnPotSqrt = document.getElementById('btnPotSqrt')
const btnProduct = document.getElementById('btnProduct')

let interruptSumSubt = 'ON'
let interruptMultDiv = 'OFF'
let interruptPotSqrt = 'OFF'
let interruptProduct = 'OFF'
let n = 0

btnSumSubt.innerText = `${interruptSumSubt}`
btnMultDiv.innerText = `${interruptMultDiv}`
btnPotSqrt.innerText = `${interruptPotSqrt}`
btnProduct.innerText = `${interruptProduct}`

btnSumSubt.disabled = true

btnMultDiv.onclick = function(){
    if(interruptMultDiv == 'OFF'){
        interruptMultDiv = 'ON'
        btnMultDiv.innerText = `${interruptMultDiv}`
        btnMultDiv.classList.remove('btn-danger')
        btnMultDiv.classList.add('btn-success')
        return n+=2
    } else{
        interruptMultDiv = 'OFF'
        btnMultDiv.innerText = `${interruptMultDiv}`
        btnMultDiv.classList.remove('btn-success')
        btnMultDiv.classList.add('btn-danger')
        return n-=2
    }
}

btnPotSqrt.onclick = function(){
    if(interruptPotSqrt == 'OFF'){
        interruptPotSqrt = 'ON'
        btnPotSqrt.innerText = `${interruptPotSqrt}`
        btnPotSqrt.classList.remove('btn-danger')
        btnPotSqrt.classList.add('btn-success')
        if(interruptMultDiv == 'OFF'){
            interruptMultDiv = 'ON'
            btnMultDiv.innerText = `${interruptMultDiv}`
            btnMultDiv.classList.remove('btn-danger')
            btnMultDiv.classList.add('btn-success')
            btnMultDiv.disabled = true
            return n+=2
        } else{
            btnMultDiv.disabled = true
        }
        return n+=2
    } else if(interruptPotSqrt == 'ON'){
        interruptPotSqrt = 'OFF'
        btnPotSqrt.innerText = `${interruptPotSqrt}`
        btnPotSqrt.classList.add('btn-danger')
        btnPotSqrt.classList.remove('btn-success')
        btnMultDiv.disabled = false
        return n-=2
    }
}

btnProduct.onclick = function(){
    if(interruptProduct == 'OFF'){
        interruptProduct = 'ON'
        btnProduct.innerText = `${interruptProduct}`
        btnProduct.classList.remove('btn-danger')
        btnProduct.classList.add('btn-success')
        if(interruptPotSqrt == 'OFF'){
            interruptPotSqrt = 'ON'
            btnPotSqrt.innerText = `${interruptPotSqrt}`
            btnPotSqrt.classList.remove('btn-danger')
            btnPotSqrt.classList.add('btn-success')
            btnPotSqrt.disabled = true
            interruptMultDiv = 'ON'
            btnMultDiv.innerText = `${interruptMultDiv}`
            btnMultDiv.classList.remove('btn-danger')
            btnMultDiv.classList.add('btn-success')
            btnMultDiv.disabled = true
            return n+=6
        } else{
            btnPotSqrt.disabled = true
        }
        return n+=2
    } else if(interruptProduct == 'ON'){
        interruptProduct = 'OFF'
        btnProduct.innerText = `${interruptProduct}`
        btnProduct.classList.add('btn-danger')
        btnProduct.classList.remove('btn-success')
        btnPotSqrt.disabled = false
        return n-=2
    }
}
// Problems (math) and verification

const problems = document.getElementById('mathProblems')
const buttonOK = document.getElementById('btnOk')

body.addEventListener("load", operation())
function operation(){
    let operations = Math.floor(Math.random() * (2 + n)) + 1
    switch(operations){
        case 1:
            sumExpression()
            break;
        case 2:
            subtExpression()
            break;
        case 3:
            multExpression()
            break;
        case 4:
            divExpression()
            break;
        case 5:
            potExpression()
            break;
        case 6:
            sqrtExpression()
            break;
        case 7:
            product1Expression()
            break;
        case 8:
            product2Expression()
            break;
    }
}

// Sum & Subtraction
const tableChalk = document.getElementById('tableChalk')
tableChalk.innerText = `${(2).toFixed(2)} P`
var upgradeSumSubt = 2
var upgradeP1 = 1

function sumExpression(){
    let sum1 = Math.floor(Math.random() * 1000)
    let sum2 = Math.floor(Math.random() * 1000)
    let sumResult = sum1 + sum2
    problems.innerText = `${sum1} + ${sum2}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == sumResult){
            let sumPoints = ( 1 * (upgradeSumSubt * upgradeP1))
            tableChalk.innerText = `${sumPoints.toFixed(2)} P`
            totalPoints += sumPoints
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        }
    }
}

function subtExpression(){
    let subt1 = Math.floor(Math.random() * 1000)
    let subt2 = Math.floor(Math.random() * 1000)
    let subtResult = subt1 - subt2
    problems.innerText = `${subt1} - ${subt2}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == subtResult){
            let sumPoints = ( 1 * (upgradeSumSubt * upgradeP1))
            tableChalk.innerText = `${sumPoints.toFixed(2)} P`
            totalPoints += sumPoints
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        }
    }
}

// Multiplication & Division
const tableBook = document.getElementById('tableBook')
tableBook.innerText = `${(10).toFixed(2)} P`
var upgradeMultDiv = 1.75
var upgradeP2 = 1

function multExpression(){
    let mult1 = Math.floor(Math.random() * 100)
    let mult2 = Math.floor(Math.random() * 100)
    let multResult = mult1 * mult2
    problems.innerText = `${mult1} x ${mult2}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == multResult){
            let multPoints = ((10/1.75) * (upgradeMultDiv * upgradeP2))
            tableBook.innerText = `${multPoints.toFixed(2)} P`
            totalPoints += multPoints
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        }
    }
}

function divExpression(){
    let div1 = Math.floor(Math.random() * 100) + 1
    let div2 = Math.floor(Math.random() * 100) + 1
    let divResult = div1 / div2
    divResult = divResult.toFixed(2)
    problems.innerText = `${div1} ÷ ${div2}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == divResult){
            let multPoints = ((10/1.75) * (upgradeMultDiv * upgradeP2))
            tableBook.innerText = `${multPoints.toFixed(2)} P`
            totalPoints += multPoints
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        }
    }
}

// Potency & SquareRoot
const tableCalculator = document.getElementById('tableCalculator')
tableCalculator.innerText = `${(50).toFixed(2)} P`
var upgradePotSqrt = 1.5
var upgradeP3 = 1

function potExpression(){
    let pot1 = Math.floor(Math.random() * 100) - 100
    let potResult = pot1 * pot1
    problems.innerText = `${pot1}²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == potResult){
            let potPoints = ((50/1.5) * (upgradePotSqrt * upgradeP3))
            tableCalculator.innerText = `${potPoints.toFixed(2)} P`
            totalPoints += potPoints
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        }
    }
}

function sqrtExpression(){
    let sqrt1 = Math.floor(Math.random() * 10000)
    let sqrtResult = Math.sqrt(sqrt1)
    sqrtResult = sqrtResult.toFixed(2)
    problems.innerText = `√${sqrt1}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == sqrtResult){
            let potPoints = ((50/1.5) * (upgradePotSqrt * upgradeP3))
            tableCalculator.innerText = `${potPoints.toFixed(2)} P`
            totalPoints += potPoints
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        }
    }
}

// Remarkable Product
const tableRules = document.getElementById('tableRules')
tableRules.innerText = `${(100).toFixed(2)} P`
var upgradeProduct = 1.35
var upgradeP4 = 1

function product1Expression(){
    let pro1 = Math.floor(Math.random() * 25) + 1
    let pro2 = Math.floor(Math.random() * 25) + 1
    let proResult = (pro1 + pro2) * (pro1 + pro2)
    problems.innerText = `(${pro1} + ${pro2})²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == proResult){
            let productPoints = ((200/1.35) * (upgradeProduct * upgradeP4))
            tableRules.innerText = `${productPoints.toFixed(2)} P`
            totalPoints += productPoints
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        }
    }
}

function product2Expression(){
    let pro1 = Math.floor(Math.random() * 25) + 1
    let pro2 = Math.floor(Math.random() * 25) + 1
    let proResult = ((pro1 - pro2) * (pro1 - pro2))
    problems.innerText = `(${div1} - ${div2})²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == proResult){
            let productPoints = ((200/1.35) * (upgradeProduct * upgradeP4))
            tableRules.innerText = `${productPoints.toFixed(2)} P`
            totalPoints += productPoints
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        }
    }
}


// Helpers

const tableToddy = document.getElementById('tableToddy')
tableToddy.innerText = `${0} P`
const btnCall1 = document.getElementById('btnCall1')
var upgradeToddy = 1.15
var upgrade1 = 1
btnCall1.onclick = function(){
    if(totalPoints > 99){
        let toddyPoints = 15
        tableToddy.innerText = `${toddyPoints.toFixed(2)} P`
        totalPoints-=100
        points.innerText = `${totalPoints.toFixed(2)} P`
        btnCall1.innerText = 'Called'
        btnCall1.style.backgroundColor = 'green'
        setInterval(function(){
            toddyPoints = ((15 / 1.15) * (upgradeToddy * upgrade1))
            tableToddy.innerText = `${toddyPoints.toFixed(2)} P`
            totalPoints += toddyPoints
            points.innerText = `${totalPoints.toFixed(2)} P`
        },60000)
        btnCall1.disabled = true
        btnToddy.disabled = false
    }
}

const tableWine = document.getElementById('tableWine')
tableWine.innerText = `${0} P`
const btnCall2 = document.getElementById('btnCall2')
var upgradeWine = 1.35
var upgrade2 = 1
btnCall2.onclick = function(){
    if(totalPoints > 249){
        let winePoints = 40
        tableWine.innerText = `${winePoints.toFixed(2)} P`
        totalPoints-=250
        points.innerText = `${totalPoints.toFixed(2)} P`
        btnCall2.innerText = 'Called'
        btnCall2.style.backgroundColor = 'green'
        setInterval(function(){
            winePoints = ((40 / 1.35) * (upgradeWine * upgrade2))
            tableWine.innerText = `${winePoints.toFixed(2)} P`
            totalPoints += winePoints
            points.innerText = `${totalPoints.toFixed(2)} P`
        },60000)
        btnCall2.disabled = true
        btnWine.disabled = false
    }
}

const tableMonster = document.getElementById('tableMonster')
tableMonster.innerText = `${0} P`
const btnCall3 = document.getElementById('btnCall3')
var upgradeMonster = 1.55
var upgrade3 = 1
btnCall3.onclick = function(){
    if(totalPoints > 499){
        let monsterPoints = 75
        tableMonster.innerText = `${monsterPoints.toFixed(2)} P`
        totalPoints-=500
        points.innerText = `${totalPoints.toFixed(2)} P`
        btnCall3.innerText = 'Called'
        btnCall3.style.backgroundColor = 'green'
        setInterval(function(){
            monsterPoints = ((75 / 1.55) * (upgradeMonster * upgrade3))
            tableMonster.innerText = `${monsterPoints.toFixed(2)} P`
            totalPoints += monsterPoints
            points.innerText = `${totalPoints.toFixed(2)} P`
        },60000)
        btnCall3.disabled = true
        btnMonster.disabled = false
    }
}

const tableCoffee = document.getElementById('tableCoffee')
tableCoffee.innerText = `${0} P`
const btnCall4 = document.getElementById('btnCall4')
var upgradeCoffee = 1.75
var upgrade4 = 1
btnCall4.onclick = function(){
    if(totalPoints > 999){
        let coffeePoints = 150
        tableCoffee.innerText = `${coffeePoints.toFixed(2)} P`
        totalPoints-=1000
        points.innerText = `${totalPoints.toFixed(2)} P`
        btnCall4.innerText = 'Called'
        btnCall4.style.backgroundColor = 'green'
        setInterval(function(){
            coffeePoints = ((150 / 1.75) * ( upgradeCoffee * upgrade4))
            tableCoffee.innerText = `${coffeePoints.toFixed(2)} P`
            totalPoints += coffeePoints
            points.innerText = `${totalPoints.toFixed(2)} P`
        },60000)
        btnCall4.disabled = true
        btnCoffee.disabled = false
    }
}

// Upgrades
// Prices
const chalkPrice = document.getElementById('chalkPrice')
const toddyPrice = document.getElementById('toddyPrice')
const bookPrice = document.getElementById('bookPrice')
const calculatorPrice = document.getElementById('calculatorPrice')

const winePrice = document.getElementById('winePrice')
const rulesPrice = document.getElementById('rulesPrice')
const monsterPrice = document.getElementById('monsterPrice')
const coffeePrice = document.getElementById('coffeePrice')

let totalToddyPrice = 10
toddyPrice.innerText = `${totalToddyPrice.toFixed(2)} P`
let totalWinePrice = 25
winePrice.innerText = `${totalWinePrice.toFixed(2)} P`
let totalMonsterPrice = 50
monsterPrice.innerText = `${totalMonsterPrice.toFixed(2)} P`
let totalCoffeePrice = 100
coffeePrice.innerText = `${totalCoffeePrice.toFixed(2)} P`

let totalChalkPrice = 5
chalkPrice.innerText = `${totalChalkPrice.toFixed(2)} P`
let totalBookPrice = 12.5
bookPrice.innerText = `${totalBookPrice.toFixed(2)} P`
let totalCalculatorPrice = 25
calculatorPrice.innerText = `${totalCalculatorPrice.toFixed(2)} P`
let totalRulesPrice = 50
rulesPrice.innerText = `${totalRulesPrice.toFixed(2)} P`

// Buttons
const btnChalk = document.getElementById('btnChalk')
const btnToddy = document.getElementById('btnToddy')
const btnBook = document.getElementById('btnBook')
const btnCalculator = document.getElementById('btnCalculator')
const btnWine = document.getElementById('btnWine')
const btnRules = document.getElementById('btnRules')
const btnMonster = document.getElementById('btnMonster')
const btnCoffee = document.getElementById('btnCoffee')

btnToddy.disabled = true
btnWine.disabled = true
btnMonster.disabled = true
btnCoffee.disabled = true

// Helpers Buttons

let a = 0
btnToddy.onclick = function(){
    if(totalPoints > totalToddyPrice && a < 9){
        totalPoints-=totalToddyPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalToddyPrice*=1.25
        toddyPrice.innerText = `${totalToddyPrice.toFixed(2)} P`
        upgrade1*=1.15
        a++
    } else if(a >= 9){
        totalPoints-=totalToddyPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        toddyPrice.innerText = `Lvl. MAX.`
        upgrade1*=1.15
        btnToddy.style.backgroundColor = 'green'
        btnToddy.innerText = '---'
        btnToddy.disabled = true
    }
}

let b = 0
btnWine.onclick = function(){
    if(totalPoints > totalWinePrice && b < 9){
        totalPoints-=totalWinePrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalWinePrice*=1.5
        winePrice.innerText = `${totalWinePrice.toFixed(2)} P`
        upgrade2*=1.35
        b++
    } else if(b >= 9){
        totalPoints-=totalWinePrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        winePrice.innerText = `Lvl. MAX.`
        upgrade2*=1.35
        btnWine.style.backgroundColor = 'green'
        btnWine.innerText = '---'
        btnWine.disabled = true
    }
}

let c = 0
btnMonster.onclick = function(){
    if(totalPoints > totalMonsterPrice && c < 9){
        totalPoints-=totalMonsterPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalMonsterPrice*=1.75
        monsterPrice.innerText = `${totalMonsterPrice.toFixed(2)} P`
        upgrade3*=1.55
        c++
    } else if(c >= 9){
        totalPoints-=totalMonsterPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        monsterPrice.innerText = `Lvl. MAX.`
        upgrade3*=1.55
        btnMonster.style.backgroundColor = 'green'
        btnMonster.innerText = '---'
        btnMonster.disabled = true
    }
}

let d = 0
btnCoffee.onclick = function(){
    if(totalPoints > totalCoffeePrice && d < 9){
        totalPoints-=totalCoffeePrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalCoffeePrice*=2
        coffeePrice.innerText = `${totalCoffeePrice.toFixed(2)} P`
        upgrade4*=1.75
        d++
    } else if(d >= 9){
        totalPoints-=totalCoffeePrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        coffeePrice.innerText = `Lvl. MAX.`
        upgrade4*=1.75
        btnCoffee.style.backgroundColor = 'green'
        btnCoffee.innerText = '---'
        btnCoffee.disabled = true
    }
}

// Players Buttons

let i = 0
btnChalk.onclick = function(){
    if(totalPoints > totalChalkPrice && i < 9){
        totalPoints-=totalChalkPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalChalkPrice*=1.25
        chalkPrice.innerText = `${totalChalkPrice.toFixed(2)} P`
        upgradeP1*=2
        i++
    } else if(i >= 9){
        totalPoints-=totalChalkPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        chalkPrice.innerText = `Lvl. MAX.`
        upgradeP1*=2
        btnChalk.style.backgroundColor = 'green'
        btnChalk.innerText = '---'
        btnChalk.disabled = true
    }
}

let j = 0
btnBook.onclick = function(){
    if(totalPoints > totalBookPrice && j < 9){
        totalPoints-=totalBookPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalBookPrice*=1.5
        bookPrice.innerText = `${totalBookPrice.toFixed(2)} P`
        upgradeP2*=1.75
        j++
    } else if(j >= 9){
        totalPoints-=totalBookPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        bookPrice.innerText = `Lvl. MAX.`
        upgradeP2*=1.75
        btnBook.style.backgroundColor = 'green'
        btnBook.innerText = '---'
        btnBook.disabled = true
    }
}

let k = 0
btnCalculator.onclick = function(){
    if(totalPoints > totalCalculatorPrice && k < 9){
        totalPoints-=totalCalculatorPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalCalculatorPrice*=1.75
        calculatorPrice.innerText = `${totalCalculatorPrice.toFixed(2)} P`
        upgradeP3*=1.5
        k++
    } else if(k >= 9){
        totalPoints-=totalCalculatorPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        calculatorPrice.innerText = `Lvl. MAX.`
        upgradeP3*=1.5
        btnCalculator.style.backgroundColor = 'green'
        btnCalculator.innerText = '---'
        btnCalculator.disabled = true
    }
}

let l = 0
btnRules.onclick = function(){
    if(totalPoints > totalRulesPrice && l < 9){
        totalPoints-=totalRulesPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalRulesPrice*=2
        rulesPrice.innerText = `${totalRulesPrice.toFixed(2)} P`
        upgradeP4*=1.35
        l++
    } else if(l >= 9){
        totalPoints-=totalRulesPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        rulesPrice.innerText = `Lvl. MAX.`
        upgradeP4*=1.35
        btnRules.style.backgroundColor = 'green'
        btnRules.innerText = '---'
        btnRules.disabled = true
    }
}