let checkYuGiOh = (n) => {
  if (isNaN(n)) {
    var content = JSON.stringify(n);
    return "invalid parameter: " + content;
  }
  else {
    var arr = Array.from({length: n}, (_, i) => i + 1);
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
console.log(checkYuGiOh([1,2,3]))
console.log(checkYuGiOh({temp: "10"}))
console.log(checkYuGiOh("fizzbuzz meh"))