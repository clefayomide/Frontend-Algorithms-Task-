let convertFahrToCelsius = (value) => {
  if (typeof value === "string" || typeof value === "number" ) {
    let number = parseInt(value)
    let answer = (number - 32) / 1.8;
    let answerInFourDecimal = answer.toFixed(4)
    return answerInFourDecimal
  }
  else if (Array.isArray(value) === true) {
    return value + " is not a valid number but a/an array"
  }
  else if (value === null) {
    return value + " is not a valid number but a/an null"
  }
  else if (typeof value === "object") {
    let content = JSON.stringify(value)
    return content + " is not a valid number but a/an " + typeof value
  }
  else if (typeof value === "undefined" || typeof value === "function") {
    return value + " is not a valid number but a/an " + typeof value
  }
  else {
    return value + " is not a valid number but a/an " + typeof value
  }
}
console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("0"))
console.log(convertFahrToCelsius(10))
console.log(convertFahrToCelsius("10"))
console.log(convertFahrToCelsius(32))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp:0}))
console.log(convertFahrToCelsius(undefined))
console.log(convertFahrToCelsius(null))
console.log(convertFahrToCelsius(function(){}))