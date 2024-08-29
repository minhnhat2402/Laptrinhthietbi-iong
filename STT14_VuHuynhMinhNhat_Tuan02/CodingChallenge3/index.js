// Example game object with player data and odds
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players1: [
        'Neuer', 'Pavard', 'Hernandez', 'Upamecano', 'Davies',
        'Kimmich', 'Goretzka', 'Muller', 'Coman', 'Lewandowski', 'Sane'
    ],
    players2: [
        'Burki', 'Piszczek', 'Hummels', 'Akanji', 'Hakimi',
        'Witsel', 'Brandt', 'Reus', 'Sancho', 'Haaland', 'Bellingham'
    ],
    score: '4:2',
    odds: {
        team1: 1.33,
        draw: 5.0,
        team2: 6.0
    },
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich']
};

// 1. Loop over the game.scored array and print each player name with the goal number
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
});

// 2. Calculate the average odd and log it to the console
const odds = Object.values(game.odds);
const averageOdd = odds.reduce((acc, odd) => acc + odd, 0) / odds.length;
console.log('Average odd:', averageOdd.toFixed(2));

// 3. Print the odds in a nicely formatted way
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.draw}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// 4. Bonus: Create an object 'scorers' with the names of the players who scored as properties and the number of goals as the value
const scorers = {};
game.scored.forEach(player => {
    scorers[player] = (scorers[player] || 0) + 1;
});

console.log('Scorers:', scorers);