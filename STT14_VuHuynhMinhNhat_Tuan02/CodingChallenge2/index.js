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

// 1. Create one player array for each team
const players1 = game.players1;
const players2 = game.players2;

// 2. Extract the goalkeeper and field players for Bayern Munich (team 1)
const [gk, ...fieldPlayers] = players1;
console.log('Goalkeeper for Bayern Munich:', gk); // 'Neuer'
console.log('Field Players for Bayern Munich:', fieldPlayers); // Array of field players

// 3. Create an array 'allPlayers' containing all players of both teams
const allPlayers = [...players1, ...players2];
console.log('All Players:', allPlayers);

// 4. Add substitute players to the Bayern Munich team
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('Bayern Munich Final Players:', players1Final);

// 5. Extract odds for each outcome
const { team1: oddsTeam1, draw: oddsDraw, team2: oddsTeam2 } = game.odds;
console.log('Odds for Team 1 (Bayern Munich):', oddsTeam1); // 1.33
console.log('Odds for Draw:', oddsDraw); // 5.0
console.log('Odds for Team 2 (Borussia Dortmund):', oddsTeam2); // 6.0

// 6. Function to print goals and player names
function printGoals(...playerNames) {
    console.log(`${playerNames.length} goals scored`);
    playerNames.forEach(name => console.log(name));
}

// Test with specific players
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// Test with players from game.scored
printGoals(...game.scored);

// 7. Determine which team is more likely to win based on odds
const moreLikelyToWin = oddsTeam1 < oddsTeam2 ? game.team1 : game.team2;
console.log(`${moreLikelyToWin} is more likely to win`);