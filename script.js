const DENOMINATIONS = [
  ["PENNY", 1], ["NICKEL", 5],["DIME", 10],
  ["QUARTER", 25], ["ONE", 100], ["FIVE", 500],
  ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
]

function checkCashRegister(price, cash, cid) {
  let amountToReturn = Math.round(cash*100) - Math.round(price*100)
  let cashOnHand = {}
  let cashToGive = {}
  
  cid.forEach(function(denomination){
    cashOnHand[denomination[0]] = Math.round(denomination[1] * 100)
  })

let index = DENOMINATIONS.length - 1;

while(index >= 0 && amountToReturn > 0){
  let moneyName = DENOMINATIONS[index][0]
  let moneyValue = DENOMINATIONS[index][1]

  if(amountToReturn - moneyValue > 0 && cashOnHand[moneyName], amountToReturn ){
    
    cashToGive[moneyName] = 0
    while(cashOnHand[moneyName] > 0 && amountToReturn - moneyValue >= 0){
      cashOnHand[moneyName] -= moneyValue
      cashToGive[moneyName] += moneyValue
      amountToReturn -= moneyValue
    }
  }
  index -= 1
}

  if(amountToReturn === 0){
    let isRegisterEmpty = true

    Object.keys(cashOnHand).forEach(function(moneyType){
      if(cashOnHand[moneyType] > 0){
        isRegisterEmpty = false
      }
    })

    if(isRegisterEmpty){
      return {
        status: 'CLOSED',
        change: cid
      }
    }
    let changeArray = []
    Object.keys(cashToGive).map(function(moneyType){
      if(cashToGive[moneyType] > 0){
        changeArray.push([moneyType, cashToGive[moneyType]/100])
      }
      
    })
   
    return {status: "OPEN", change: changeArray}
  }
  return {status: "INSUFFICIENT_FUNDS", change: []}
}

let res = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

console.log(res)
