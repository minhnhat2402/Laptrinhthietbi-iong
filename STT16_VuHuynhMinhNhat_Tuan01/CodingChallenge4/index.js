var bill = 275
var tip
if (bill >= 50 && bill < 300)
    tip = (bill * 0.15).toFixed(2);
else
    tip = (bill * 0.2).toFixed(2);

function sum(bill, tip) {
    bill = Number(bill)
    tip = Number(tip)
    return bill + tip
}
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${sum(bill,tip)}`);