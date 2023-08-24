const convertToCelsius = function(tempF) {
  let celsius =  5/9 *(tempF - 32);
  let rounded = Math.round(celsius*10) / 10;
  let fixed = +(rounded.toFixed(1));
  return fixed

};

const convertToFahrenheit = function(tempC) {
  let fahrenheit = 9/5 * tempC + 32;
  let rounded = Math.round(fahrenheit*10) / 10;
  let fixed = +(rounded.toFixed(1));
  return fixed
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
