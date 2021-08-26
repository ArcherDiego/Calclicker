const problems = document.getElementById('mathProblems')
const points = document.getElementById('points')
const result = document.getElementById('result')
const buttonOK = document.getElementById('btnOk')

var totalPoints = 0
points.innerText = `${totalPoints} P`

// Operações

var operations = Math.floor(Math.random() * 8) + 1
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
