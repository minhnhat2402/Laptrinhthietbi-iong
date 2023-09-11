var calcAverage = function (score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
};

var avgDolphins = calcAverage(41, 23, 71);
var avgKoalas = calcAverage(65, 54, 49);

var checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
};
checkWinner(avgDolphins, avgKoalas);
