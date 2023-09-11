function printForecast(arr) {
    let forecastString = '';

    for (let i = 0; i < arr.length; i++) {
        forecastString += `... ${arr[i]}°C in ${i + 1} day${i === 0 ? '' : 's'} `;
    }

    console.log(forecastString);
}
  
  var forecast1 = [17, 21, 23];
  var forecast2 = [12, 5, -5, 0, 4];
  
  console.log("Forecast 1:");
  printForecast(forecast1);
  
  console.log("\nForecast 2:");
  printForecast(forecast2);
  