// Achivements

const achivement1 = document.getElementById('achivement-1')
const achivement2 = document.getElementById('achivement-2')
const achivement3 = document.getElementById('achivement-3')
const achivement4 = document.getElementById('achivement-4')
/*
body.onload = function(){
    if(verf == 4){
        achivement1.classList.remove('opacity-25')
        achivement1.classList.add('opacity-100')
        achivement1.classList.add('text-success')
    }
}

function achiv2(){
    achivement2.classList.remove('opacity-25')
    achivement2.classList.add('opacity-100')
    achivement2.classList.add('text-success')
}

function achiv3(){
    achivement3.classList.remove('opacity-25')
    achivement3.classList.add('opacity-100')
    achivement3.classList.add('text-success')
}

function achiv4(){
    achivement4.classList.remove('opacity-25')
    achivement4.classList.add('opacity-100')
    achivement4.classList.add('text-success')
}
*/
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
            return n+=4
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
            totalPoints += ( 1 * (upgradeSumSubt * upgradeP1))
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
            totalPoints += ( 1 * (upgradeSumSubt * upgradeP1))
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            operation()
        }
    }
}

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
            totalPoints += ((10/1.75) * (upgradeMultDiv * upgradeP2))
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        }
    }
}

function divExpression(){
    let div1 = Math.floor(Math.random() * 100) + 1
    let div2 = Math.floor(Math.random() * 100) + 1
    let divResult = div1 / div2
    divResult = divResult.toFixed(2)
    problems.innerText = `${div1} ÷ ${div2}`
    console.log(divResult)
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == divResult){
            totalPoints += ((10/1.75) * (upgradeMultDiv * upgradeP2))
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        }
    }
}

var upgradePotSqrt = 1.5
var upgradeP3 = 1

function potExpression(){
    let pot1 = Math.floor(Math.random() * 100) - 100
    let potResult = pot1 * pot1
    problems.innerText = `${pot1}²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == potResult){
            totalPoints += ((50/1.5) * (upgradePotSqrt * upgradeP3))
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        }
    }
}

function sqrtExpression(){
    let sqrt1 = Math.floor(Math.random() * 10000)
    let sqrtResult = Math.sqrt(sqrt1)
    problems.innerText = `√${sqrt1}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == sqrtResult){
            totalPoints += ((50/1.5) * (upgradePotSqrt * upgradeP3))
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        }
    }
}

var upgradeProduct = 1.35
var upgradeP4 = 1

function product1Expression(){
    let pro1 = Math.floor(Math.random() * 25) + 1
    let pro2 = Math.floor(Math.random() * 25) + 1
    let proResult = ((pro1 * pro1) + (2 * pro1 * pro2) + (pro2 * pro2))
    problems.innerText = `(${pro1}x + ${pro2})²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == proResult){
            totalPoints += ((200/1.35) * (upgradeProduct * upgradeP4))
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        }
    }
}

function product2Expression(){
    let pro1 = Math.floor(Math.random() * 25) + 1
    let pro2 = Math.floor(Math.random() * 25) + 1
    let proResult = ((pro1 * pro1) - (2 * pro1 * pro2) + (pro2 * pro2))
    problems.innerText = `(${div1}x - ${div2})²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == proResult){
            totalPoints += ((100/1.25) * (upgradeProduct * upgradeP4))
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints.toFixed(2)} P`
            return operation()
        }
    }
}


// Helpers

const btnCall1 = document.getElementById('btnCall1')
var upgradeToddy = 1.15
var upgrade1 = 1
btnCall1.onclick = function(){
    if(totalPoints > 99){
        totalPoints-=100
        points.innerText = `${totalPoints.toFixed(2)} P`
        btnCall1.innerText = 'Called'
        btnCall1.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((15 / 1.15) * (upgradeToddy * upgrade1))
            return points.innerText = `${totalPoints.toFixed(2)} P`
        },60000)
        btnCall1.disabled = true
        btnToddy.disabled = false
    }
}

const btnCall2 = document.getElementById('btnCall2')
var upgradeWine = 1.35
var upgrade2 = 1
btnCall2.onclick = function(){
    if(totalPoints > 249){
        totalPoints-=250
        points.innerText = `${totalPoints.toFixed(2)} P`
        btnCall2.innerText = 'Called'
        btnCall2.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((40 / 1.35) * (upgradeWine * upgrade2))
            return points.innerText = `${totalPoints.toFixed(2)} P`
        },60000)
        btnCall2.disabled = true
        btnWine.disabled = false
    }
}

const btnCall3 = document.getElementById('btnCall3')
var upgradeMonster = 1.55
var upgrade3 = 1
btnCall3.onclick = function(){
    if(totalPoints > 499){
        totalPoints-=500
        points.innerText = `${totalPoints.toFixed(2)} P`
        btnCall3.innerText = 'Called'
        btnCall3.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((75 / 1.55) * (upgradeMonster * upgrade3))
            return points.innerText = `${totalPoints.toFixed(2)} P`
        },60000)
        btnCall3.disabled = true
        btnMonster.disabled = false
    }
}

const btnCall4 = document.getElementById('btnCall4')
var upgradeCoffee = 1.75
var upgrade4 = 1
btnCall4.onclick = function(){
    if(totalPoints > 999){
        totalPoints-=1000
        points.innerText = `${totalPoints.toFixed(2)} P`
        btnCall4.innerText = 'Called'
        btnCall4.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((150 / 1.75) * ( upgradeCoffee * upgrade4))
            return points.innerText = `${totalPoints.toFixed(2)} P`
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

btnToddy.onclick = function(){
    if(totalPoints > totalToddyPrice){
        totalPoints-=totalToddyPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalToddyPrice*=1.25
        toddyPrice.innerText = `${totalToddyPrice.toFixed(2)} P`
        upgrade1*=1.15
    }
}

btnWine.onclick = function(){
    if(totalPoints > totalWinePrice){
        totalPoints-=totalWinePrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalWinePrice*=1.5
        winePrice.innerText = `${totalWinePrice.toFixed(2)} P`
        upgrade2*=1.35
    }
}

btnMonster.onclick = function(){
    if(totalPoints > totalMonsterPrice){
        totalPoints-=totalMonsterPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalMonsterPrice*=1.75
        monsterPrice.innerText = `${totalMonsterPrice.toFixed(2)} P`
        upgrade3*=1.55
    }
}

btnCoffee.onclick = function(){
    if(totalPoints > totalCoffeePrice){
        totalPoints-=totalCoffeePrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalCoffeePrice*=2
        coffeePrice.innerText = `${totalCoffeePrice.toFixed(2)} P`
        upgrade4*=1.75
    }
}

// Players Buttons

btnChalk.onclick = function(){
    if(totalPoints > totalChalkPrice){
        totalPoints-=totalChalkPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalChalkPrice*=1.25
        chalkPrice.innerText = `${totalChalkPrice.toFixed(2)} P`
        upgradeP1*=2
    }
}

btnBook.onclick = function(){
    if(totalPoints > totalBookPrice){
        totalPoints-=totalBookPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalBookPrice*=1.5
        bookPrice.innerText = `${totalBookPrice.toFixed(2)} P`
        upgradeP2*=1.75
    }
}

btnCalculator.onclick = function(){
    if(totalPoints > totalCalculatorPrice){
        totalPoints-=totalCalculatorPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalCalculatorPrice*=1.75
        calculatorPrice.innerText = `${totalCalculatorPrice.toFixed(2)} P`
        upgradeP3*=1.5
    }
}

btnRules.onclick = function(){
    if(totalPoints > totalRulesPrice){
        totalPoints-=totalRulesPrice
        points.innerText = `${totalPoints.toFixed(2)} P`
        totalRulesPrice*=2
        rulesPrice.innerText = `${totalRulesPrice.toFixed(2)} P`
        upgradeP4*=1.35
    }
}
