Math.roundTo = function (number, precision) {
  let converter = Math.pow(10, precision);
  //console.log(converter);
  let multiplier = Math.round(number * converter);
  //console.log(multiplier);
  let cutOff = Math.floor(multiplier);
  //console.log(cutOff);
  let rounded = cutOff / converter;
  return rounded;
};


console.log(Math.roundTo(3.14159, 4));