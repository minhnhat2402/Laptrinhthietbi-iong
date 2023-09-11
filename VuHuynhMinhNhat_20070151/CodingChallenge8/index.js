function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
  
  var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  
  var tips = [];
  var totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    var tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
  }
  
  function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
  
  var averageTotal = calcAverage(totals);
  
  console.log("Bills:", bills);
  console.log("Tips:", tips);
  console.log("Totals:", totals);
  console.log("Average Total:", averageTotal);
  