const body = document.getElementsByTagName('body')[0]
const problems = document.getElementById('mathProblems')
const points = document.getElementById('points')
const result = document.getElementById('result')
const buttonOK = document.getElementById('btnOk')

var totalPoints = 10001
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

// Problemas (math)

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

function sumExpression(){
    let sum1 = Math.floor(Math.random() * 1000)
    let sum2 = Math.floor(Math.random() * 1000)
    return problems.innerText = `${sum1} + ${sum2}`
}

function subtExpression(){
    let sub1 = Math.floor(Math.random() * 1000)
    let sub2 = Math.floor(Math.random() * 1000)
    return problems.innerText = `${sub1} - ${sub2}`
}

function multExpression(){
    let mult1 = Math.floor(Math.random() * 100)
    let mult2 = Math.floor(Math.random() * 100)
    return problems.innerText = `${mult1} x ${mult2}`
}

function divExpression(){
    let div1 = Math.floor(Math.random() * 100)
    let div2 = Math.floor(Math.random() * 100)
    return problems.innerText = `${div1} ÷ ${div2}`
}

function potExpression(){
    let pot1 = Math.floor(Math.random() * 100) - 100
    return problems.innerText = `${pot1}²`
}

function sqrtExpression(){
    let sqrt1 = Math.floor(Math.random() * 10000)
    return problems.innerText = `√${sqrt1}`
}

function product1Expression(){
    let div1 = Math.floor(Math.random() * 25) + 1
    let div2 = Math.floor(Math.random() * 25) + 1
    return problems.innerText = `(${div1} + ${div2})²`
}

function product2Expression(){
    let div1 = Math.floor(Math.random() * 25) + 1
    let div2 = Math.floor(Math.random() * 25) + 1
    return problems.innerText = `(${div1} - ${div2})²`
}


// Ajudantes

const btnCall1 = document.getElementById('btnCall1')
btnCall1.onclick = function(){
    if(totalPoints > 99){
        totalPoints-=100
        points.innerText = `${totalPoints} P`
        btnCall1.innerText = 'Chamou'
        btnCall1.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += 15
            return points.innerText = `${totalPoints} P`
        },60000)
        btnCall1.disabled = true
    }
}

const btnCall2 = document.getElementById('btnCall2')
btnCall2.onclick = function(){
    if(totalPoints > 249){
        totalPoints-=250
        points.innerText = `${totalPoints} P`
        btnCall2.innerText = 'Chamou'
        btnCall2.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += 40
            return points.innerText = `${totalPoints} P`
        },60000)
        btnCall2.disabled = true
    }
}

const btnCall3 = document.getElementById('btnCall3')
btnCall3.onclick = function(){
    if(totalPoints > 499){
        totalPoints-=500
        points.innerText = `${totalPoints} P`
        btnCall3.innerText = 'Chamou'
        btnCall3.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += 75
            return points.innerText = `${totalPoints} P`
        },60000)
        btnCall3.disabled = true
    }
}

const btnCall4 = document.getElementById('btnCall4')
btnCall4.onclick = function(){
    if(totalPoints > 999){
        totalPoints-=1000
        points.innerText = `${totalPoints} P`
        btnCall4.innerText = 'Chamou'
        btnCall4.style.backgroundColor = 'green'
        setInterval(function(){
            totalPoints += 150
            return points.innerText = `${totalPoints} P`
        },60000)
        btnCall4.disabled = true
    }
}

// Upgrades

