Math.roundTo = function (number, precision) {
  let converter = Math.pow(10, precision);
  let multiplier = Math.round(number * converter);
  let cutOff = Math.floor(multiplier);
  let rounded = cutOff / converter;
  return rounded;
};


console.log(Math.roundTo(3.14159, 4));