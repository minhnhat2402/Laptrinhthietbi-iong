var calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
  
  var testBill = 100;
  var tip = calcTip(testBill);
  console.log(`For a bill of $${testBill}, the tip is $${tip}`);
  
  var bills = [125, 555, 44];
  
  var tips = bills.map((bill) => calcTip(bill));
  
  var total = bills.map((bill, index) => bill + tips[index]);
  
  console.log("Bills:", bills);
  console.log("Tips:", tips);
  console.log("Total:", total);
  