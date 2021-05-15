let convertFahrToCelsius = (value) => {
  value = prompt("fahrenheit");
  if (isNaN(value)) {
    return value + " is not a valid number but a/an " + (typeof value);

  } else {
    let result = (value - 32) / 1.8;
    return result.toFixed(4) + " °C"
  }
}
console.log(convertFahrToCelsius())