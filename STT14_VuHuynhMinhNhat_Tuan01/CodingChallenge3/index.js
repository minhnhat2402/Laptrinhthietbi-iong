var dolphinsScores = [97, 112, 101]
var koalasScores = [109, 95, 123]

var dolphinsAverageScore = dolphinsScores.reduce((acc, num) => { return acc + num }) / 3;
var koalasAverageScore = koalasScores.reduce((acc, num) => { return acc + num }) / 3;
console.log(`Dolphins Team Score: ` + dolphinsAverageScore.toFixed(2));
console.log(`Koalas Team Score: ` + koalasAverageScore.toFixed(2));
if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100)
    console.log(`==========Dolphins Team is Winner==========`);
else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100)
    console.log(`==========Koalas Team is Winner==========`);
else if (dolphinsAverageScore >= 100)
    console.log(`==========Draw==========`);
else
    console.log(`==========No Team is Winner==========`);