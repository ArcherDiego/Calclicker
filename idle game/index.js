const problems = document.getElementById('mathProblems')
const points = document.getElementById('points')
const result = document.getElementById('result')
const buttonOK = document.getElementById('btnOk')

var totalPoints = 0
points.innerText = `${totalPoints} P`

// Problemas (math)

const operations = Math.floor(Math.random() * 8) + 1
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

// Operações
/*
var btnSwitch = document.getElementById('btnMultDiv')

btnSwitch.onclick = function(){
    if(btnSwitch.innerText = 'OFF'){
        btnSwitch.innerText = 'ON'
        btnSwitch.style.backgroundColor = 'green'
    } else if(btnSwitch.innerText = 'ON'){
        btnSwitch.innerText = 'OFF'
        btnSwitch.style.backgroundColor = 'red'
    }
}
*/

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