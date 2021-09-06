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

function sumExpression(){
    let upgradeSumSubt = 2
    let upgradeP1 = 1
    let sum1 = Math.floor(Math.random() * 1000)
    let sum2 = Math.floor(Math.random() * 1000)
    let sumResult = sum1 + sum2
    problems.innerText = `${sum1} + ${sum2}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == sumResult){
            totalPoints += ((1/2) * (upgradeSumSubt * upgradeP1))
            points.innerText = `${totalPoints} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints} P`
            operation()
        }
    }
}

function subtExpression(){
    let upgradeSumSubt = 2
    let upgradeP1 = 1
    let subt1 = Math.floor(Math.random() * 1000)
    let subt2 = Math.floor(Math.random() * 1000)
    let subtResult = subt1 - subt2
    problems.innerText = `${subt1} - ${subt2}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == subtResult){
            totalPoints += ((1/2) * (upgradeSumSubt * upgradeP1))
            points.innerText = `${totalPoints} P`
            operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints} P`
            operation()
        }
    }
}

function multExpression(){
    let upgradeMultDiv = 1.75
    let upgradeP2 = 1
    let mult1 = Math.floor(Math.random() * 100)
    let mult2 = Math.floor(Math.random() * 100)
    let multResult = mult1 * mult2
    problems.innerText = `${mult1} x ${mult2}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == multResult){
            totalPoints += ((10/1.75) * (upgradeMultDiv * upgradeP2))
            points.innerText = `${totalPoints} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints} P`
            return operation()
        }
    }
}

function divExpression(){
    let upgradeMultDiv = 1.75
    let upgradeP2 = 1
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
            points.innerText = `${totalPoints} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints} P`
            return operation()
        }
    }
}

function potExpression(){
    let upgradePotSqrt = 1.5
    let upgradeP3 = 1
    let pot1 = Math.floor(Math.random() * 100) - 100
    let potResult = pot1 * pot1
    problems.innerText = `${pot1}²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == potResult){
            totalPoints += ((50/1.5) * (upgradePotSqrt * upgradeP3))
            points.innerText = `${totalPoints} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints} P`
            return operation()
        }
    }
}

function sqrtExpression(){
    let upgradePotSqrt = 1.5
    let upgradeP3 = 1
    let sqrt1 = Math.floor(Math.random() * 10000)
    let sqrtResult = Math.sqrt(sqrt1)
    problems.innerText = `√${sqrt1}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == sqrtResult){
            totalPoints += ((50/1.5) * (upgradePotSqrt * upgradeP3))
            points.innerText = `${totalPoints} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints} P`
            return operation()
        }
    }
}

function product1Expression(){
    let upgradeProduct = 1.25
    let upgradeP4 = 1
    let pro1 = Math.floor(Math.random() * 25) + 1
    let pro2 = Math.floor(Math.random() * 25) + 1
    let proResult = ((pro1 * pro1) + (2 * pro1 * pro2) + (pro2 * pro2))
    problems.innerText = `(${pro1}x + ${pro2})²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == proResult){
            totalPoints += ((100/1.25) * (upgradeProduct * upgradeP4))
            points.innerText = `${totalPoints} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints} P`
            return operation()
        }
    }
}

function product2Expression(){
    let upgradeProduct = 1.25
    let upgradeP4 = 1
    let pro1 = Math.floor(Math.random() * 25) + 1
    let pro2 = Math.floor(Math.random() * 25) + 1
    let proResult = ((pro1 * pro1) - (2 * pro1 * pro2) + (pro2 * pro2))
    problems.innerText = `(${div1}x - ${div2})²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == proResult){
            totalPoints += ((100/1.25) * (upgradeProduct * upgradeP4))
            points.innerText = `${totalPoints} P`
            return operation()
        } else{
            totalPoints -= 1
            points.innerText = `${totalPoints} P`
            return operation()
        }
    }
}


// Helpers

const btnCall1 = document.getElementById('btnCall1')
btnCall1.onclick = function(){
    let upgradeToddy = 2
    let upgrade1 = 1
    if(totalPoints > 99){
        totalPoints-=100
        points.innerText = `${totalPoints} P`
        btnCall1.innerText = 'Chamou'
        btnCall1.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((15 / 2) * (upgradeToddy * upgrade1))
            return points.innerText = `${totalPoints} P`
        },60000)
        btnCall1.disabled = true
        btnToddy.disabled = false
    }
}

const btnCall2 = document.getElementById('btnCall2')
btnCall2.onclick = function(){
    let upgradeWine = 1.75
    let upgrade2 = 1
    if(totalPoints > 249){
        totalPoints-=250
        points.innerText = `${totalPoints} P`
        btnCall2.innerText = 'Chamou'
        btnCall2.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((40 / 1.75) * (upgradeWine * upgrade2))
            return points.innerText = `${totalPoints} P`
        },60000)
        btnCall2.disabled = true
        btnWine.disabled = false
    }
}

const btnCall3 = document.getElementById('btnCall3')
btnCall3.onclick = function(){
    let upgradeMonster = 1.5
    let upgrade3 = 1
    if(totalPoints > 499){
        totalPoints-=500
        points.innerText = `${totalPoints} P`
        btnCall3.innerText = 'Chamou'
        btnCall3.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((75 / 1.5) * (upgradeMonster * upgrade3))
            return points.innerText = `${totalPoints} P`
        },60000)
        btnCall3.disabled = true
        btnMonster.disabled = false
    }
}

const btnCall4 = document.getElementById('btnCall4')
btnCall4.onclick = function(){
    let upgradeCoffee = 1.25
    let upgrade4 = 1
    if(totalPoints > 999){
        totalPoints-=1000
        points.innerText = `${totalPoints} P`
        btnCall4.innerText = 'Chamou'
        btnCall4.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((150 / 1.25) * ( upgradeCoffee * upgrade4))
            return points.innerText = `${totalPoints} P`
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
toddyPrice.innerText = `${totalToddyPrice} P`
let totalWinePrice = 25
winePrice.innerText = `${totalWinePrice} P`
let totalMonsterPrice = 50
monsterPrice.innerText = `${totalMonsterPrice} P`
let totalCoffeePrice = 100
coffeePrice.innerText = `${totalCoffeePrice} P`

let totalChalkPrice = 5
chalkPrice.innerText = `${totalChalkPrice} P`
let totalBookPrice = 12.5
bookPrice.innerText = `${totalBookPrice} P`
let totalCalculatorPrice = 25
calculatorPrice.innerText = `${totalCalculatorPrice} P`
let totalRulesPrice = 50
rulesPrice.innerText = `${totalRulesPrice} P`

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
        points.innerText = `${totalPoints} P`
        totalToddyPrice*=1.25
        toddyPrice.innerText = `${totalToddyPrice} P`
        upgrade1*=2
    }
}

btnWine.onclick = function(){
    if(totalPoints > totalWinePrice){
        totalPoints-=totalWinePrice
        points.innerText = `${totalPoints} P`
        totalWinePrice*=1.5
        winePrice.innerText = `${totalWinePrice} P`
        upgrade2*=1.75
    }
}

btnMonster.onclick = function(){
    if(totalPoints > totalMonsterPrice){
        totalPoints-=totalMonsterPrice
        points.innerText = `${totalPoints} P`
        totalMonsterPrice*=1.75
        monsterPrice.innerText = `${totalMonsterPrice} P`
        upgrade3*=1.5
    }
}

btnCoffee.onclick = function(){
    if(totalPoints > totalCoffeePrice){
        totalPoints-=totalCoffeePrice
        points.innerText = `${totalPoints} P`
        totalCoffeePrice*=2
        coffeePrice.innerText = `${totalCoffeePrice} P`
        upgrade4*=1.25
    }
}

// Players Buttons

btnChalk.onclick = function(){
    if(totalPoints > totalChalkPrice){
        totalPoints-=totalChalkPrice
        points.innerText = `${totalPoints} P`
        totalChalkPrice*=1.25
        chalkPrice.innerText = `${totalChalkPrice} P`
        upgradeP1*=2
    }
}

btnBook.onclick = function(){
    if(totalPoints > totalBookPrice){
        totalPoints-=totalBookPrice
        points.innerText = `${totalPoints} P`
        totalBookPrice*=1.5
        bookPrice.innerText = `${totalBookPrice} P`
        upgradeP2*=1.75
    }
}

btnCalculator.onclick = function(){
    if(totalPoints > totalCalculatorPrice){
        totalPoints-=totalCalculatorPrice
        points.innerText = `${totalPoints} P`
        totalCalculatorPrice*=1.75
        calculatorPrice.innerText = `${totalCalculatorPrice} P`
        upgradeP3*=1.5
    }
}

btnRules.onclick = function(){
    if(totalPoints > totalRulesPrice){
        totalPoints-=totalRulesPrice
        points.innerText = `${totalPoints} P`
        totalRulesPrice*=2
        rulesPrice.innerText = `${totalRulesPrice} P`
        upgradeP4*=1.25
    }
}
