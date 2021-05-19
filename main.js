/***************************
        TASK ONE
***************************/


let convertFahrToCelsius = (value) => {
  if (typeof value === "string" || typeof value === "number") {
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
console.log(convertFahrToCelsius([1, 2, 3]))
console.log(convertFahrToCelsius({ temp: 0 }))
console.log(convertFahrToCelsius(undefined))
console.log(convertFahrToCelsius(null))
console.log(convertFahrToCelsius(function() {}))
console.log(convertFahrToCelsius(true))



/***************************
        TASK TWO
***************************/

let checkYuGiOh = (n) => {
  if (isNaN(n)) {
    var content = JSON.stringify(n);
    return "invalid parameter: " + content;
  }
  else {
    var arr = Array.from({ length: n }, (_, i) => i + 1);
    var results = [];
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] % 2 === 0) && (arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
        results.push("yu-gi-oh");
      }
      else if ((arr[i] % 2 === 0) && (arr[i] % 3 === 0)) {
        results.push("yu-gi");
      }
      else if ((arr[i] % 2 === 0) && (arr[i] % 5 === 0)) {
        results.push("yu-oh");
      }
      else if ((arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
        results.push("gi-oh");
      }
      else if ((arr[i] % 2 === 0)) {
        results.push("yu")
      }
      else if ((arr[i] % 3 === 0)) {
        results.push("gi")
      }
      else if ((arr[i] % 5 === 0)) {
        results.push("oh")
      }
      else {
        results.push(arr[i])
      }
    }

  }

  return results
}
console.log(checkYuGiOh(3))
console.log(checkYuGiOh(10))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh(100))
console.log(checkYuGiOh([1, 2, 3]))
console.log(checkYuGiOh({ temp: "10" }))
console.log(checkYuGiOh("fizzbuzz meh"))