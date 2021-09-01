const body = document.getElementsByTagName('body')[0]
const points = document.getElementById('points')


var totalPoints = 0
points.innerText = `${totalPoints} P`


// Operações

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
// Problemas (math) && Verificação de Resultado

const problems = document.getElementById('mathProblems')
const buttonOK = document.getElementById('btnOk')

body.addEventListener("load", operation())
function operation(){
    const operations = Math.floor(Math.random() * (2 + n)) + 1
    switch(operations){
        case 1:
            sumExpression()
            break
        case 2:
            subtExpression()
            break
        case 3:
            multExpression()
            break
        case 4:
            divExpression()
            break
        case 5:
            potExpression()
            break
        case 6:
            sqrtExpression()
            break
        case 7:
            product1Expression()
            break
        case 8:
            product2Expression()
            break
    }
}

function sumExpression(){
    let sum1 = Math.floor(Math.random() * 1000)
    let sum2 = Math.floor(Math.random() * 1000)
    let sumResult = sum1 + sum2
    problems.innerText = `${sum1} + ${sum2}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == sumResult){
            totalPoints+=1
            totalPoints.toFixed(2)
            points.innerText = `${totalPoints} P`
            operation()
        } else{
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
            totalPoints+=1
            totalPoints.toFixed(2)
            points.innerText = `${totalPoints} P`
            operation()
        } else{
            operation()
        }
    }
}

function multExpression(){
    let mult1 = Math.floor(Math.random() * 100)
    let mult2 = Math.floor(Math.random() * 100)
    let multResult = mult1 * mult2
    problems.innerText = `${mult1} x ${mult2}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == multResult){
            totalPoints+=10
            totalPoints.toFixed(2)
            points.innerText = `${totalPoints} P`
            operation()
        } else{
            operation()
        }
    }
}

function divExpression(){
    let div1 = Math.floor(Math.random() * 100) + 1
    let div2 = Math.floor(Math.random() * 100) + 1
    let divResult = div1 / div2
    problems.innerText = `${div1} ÷ ${div2}`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == divResult){
            totalPoints+=10
            totalPoints.toFixed(2)
            points.innerText = `${totalPoints} P`
            operation()
        } else{
            operation()
        }
    }
}

function potExpression(){
    let pot1 = Math.floor(Math.random() * 100) - 100
    let potResult = pot1 * pot1
    problems.innerText = `${pot1}²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == potResult){
            totalPoints+=50
            totalPoints.toFixed(2)
            points.innerText = `${totalPoints} P`
            operation()
        } else{
            operation()
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
            totalPoints+=50
            totalPoints.toFixed(2)
            points.innerText = `${totalPoints} P`
            operation()
        } else{
            operation()
        }
    }
}

function product1Expression(){
    let pro1 = Math.floor(Math.random() * 25) + 1
    let pro2 = Math.floor(Math.random() * 25) + 1
    let proResult = ((pro1 * pro1) + (2 * pro1 * pro2) + (pro2 * pro2))
    problems.innerText = `(${pro1}x + ${pro2})²`
    buttonOK.onclick = function(){
        let result = document.getElementById('result').value
        if(result == proResult){
            totalPoints+=100
            totalPoints.toFixed(2)
            points.innerText = `${totalPoints} P`
            operation()
        } else{
            operation()
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
            totalPoints+=100
            totalPoints.toFixed(2)
            points.innerText = `${totalPoints} P`
            operation()
        } else{
            operation()
        }
    }
}


// Ajudantes

var updradeToddy = 2
var updrade1 = 1

const btnCall1 = document.getElementById('btnCall1')
btnCall1.onclick = function(){
    if(totalPoints > 99){
        totalPoints-=100
        totalPoints = totalPoints.toFixed(2)
        points.innerText = `${totalPoints} P`
        btnCall1.innerText = 'Chamou'
        btnCall1.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((15 / 2) * (updradeToddy * updrade1))
            totalPoints = totalPoints.toFixed(2)
            return points.innerText = `${totalPoints} P`
        },60000)
        btnCall1.disabled = true
        btnToddy.disabled = false
    }
}

var updradeWine = 1.75
var updrade2 = 1

const btnCall2 = document.getElementById('btnCall2')
btnCall2.onclick = function(){
    if(totalPoints > 249){
        totalPoints-=250
        totalPoints = totalPoints.toFixed(2)
        points.innerText = `${totalPoints} P`
        btnCall2.innerText = 'Chamou'
        btnCall2.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((40 / 1.75) * (updradeWine * updrade2))
            totalPoints = totalPoints.toFixed(2)
            return points.innerText = `${totalPoints} P`
        },60000)
        btnCall2.disabled = true
        btnWine.disabled = false
    }
}

var updradeMonster = 1.5
var updrade3 = 1

const btnCall3 = document.getElementById('btnCall3')
btnCall3.onclick = function(){
    if(totalPoints > 499){
        totalPoints-=500
        totalPoints = totalPoints.toFixed(2)
        points.innerText = `${totalPoints} P`
        btnCall3.innerText = 'Chamou'
        btnCall3.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((75 / 1.5) * (updradeMonster * updrade3))
            totalPoints = totalPoints.toFixed(2)
            return points.innerText = `${totalPoints} P`
        },60000)
        btnCall3.disabled = true
        btnMonster.disabled = false
    }
}

var updradeCoffee = 1.25
var updrade4 = 1

const btnCall4 = document.getElementById('btnCall4')
btnCall4.onclick = function(){
    if(totalPoints > 999){
        totalPoints-=1000
        totalPoints = totalPoints.toFixed(2)
        points.innerText = `${totalPoints} P`
        btnCall4.innerText = 'Chamou'
        btnCall4.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += ((150 / 1.25) * ( updradeCoffee * updrade4))
            totalPoints = totalPoints.toFixed(2)
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
totalToddyPrice = totalToddyPrice.toFixed(2)
toddyPrice.innerText = `${totalToddyPrice} P`
let totalWinePrice = 25
totalWinePrice = totalWinePrice.toFixed(2)
winePrice.innerText = `${totalWinePrice} P`
let totalMonsterPrice = 50
totalMonsterPrice = totalMonsterPrice.toFixed(2)
monsterPrice.innerText = `${totalMonsterPrice} P`
let totalCoffeePrice = 100
totalCoffeePrice = totalCoffeePrice.toFixed(2)
coffeePrice.innerText = `${totalCoffeePrice} P`

let totalChalkPrice = 5
totalChalkPrice = totalChalkPrice.toFixed(2)
chalkPrice.innerText = `${totalChalkPrice} P`
let totalBookPrice = 12.5
totalBookPrice = totalBookPrice.toFixed(2)
bookPrice.innerText = `${totalBookPrice} P`
let totalCalculatorPrice = 25
totalCalculatorPrice = totalCalculatorPrice.toFixed(2)
calculatorPrice.innerText = `${totalCalculatorPrice} P`
let totalRulesPrice = 50
totalRulesPrice = totalRulesPrice.toFixed(2)
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
        totalPoints = totalPoints.toFixed(2)
        points.innerText = `${totalPoints} P`
        totalToddyPrice*=1.25
        totalToddyPrice = totalToddyPrice.toFixed(2)
        toddyPrice.innerText = `${totalToddyPrice} P`
        updrade1*=2
    }
}

btnWine.onclick = function(){
    if(totalPoints > totalWinePrice){
        totalPoints-=totalWinePrice
        totalPoints = totalPoints.toFixed(2)
        points.innerText = `${totalPoints} P`
        totalWinePrice*=1.5
        totalWinePrice = totalWinePrice.toFixed(2)
        winePrice.innerText = `${totalWinePrice} P`
        updrade2*=1.75
    }
}

btnMonster.onclick = function(){
    if(totalPoints > totalMonsterPrice){
        totalPoints-=totalMonsterPrice
        totalPoints = totalPoints.toFixed(2)
        points.innerText = `${totalPoints} P`
        totalMonsterPrice*=1.75
        totalMonsterPrice = totalMonsterPrice.toFixed(2)
        monsterPrice.innerText = `${totalMonsterPrice} P`
        updrade3*=1.5
    }
}

btnCoffee.onclick = function(){
    if(totalPoints > totalCoffeePrice){
        totalPoints-=totalCoffeePrice
        totalPoints = totalPoints.toFixed(2)
        points.innerText = `${totalPoints} P`
        totalCoffeePrice*=2
        totalCoffeePrice = totalCoffeePrice.toFixed(2)
        coffeePrice.innerText = `${totalCoffeePrice} P`
        updrade4*=1.25
    }
}

// Players Buttons