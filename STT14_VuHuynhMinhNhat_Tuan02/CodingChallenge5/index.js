// Example gameEvents map with game events
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [21, '🔄 SUBSTITUTION'],
    [37, '🟨 YELLOW CARD'],
    [45, '⚽ GOAL'],
    [64, '🟨 YELLOW CARD'],
    [72, '🔄 SUBSTITUTION'],
    [80, '🟥 RED CARD'],
    [89, '⚽ GOAL']
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log('Unique game events:', events);

// 2. Remove the event from minute 64
gameEvents.delete(64);
console.log('Updated game events:', gameEvents);

// 3. Compute and log the average time between events
const eventMinutes = [...gameEvents.keys()];
const totalEvents = eventMinutes.length;
const totalMinutes = 90;
const averageTime = totalMinutes / totalEvents;
console.log(`An event happened, on average, every ${averageTime.toFixed(2)} minutes`);

// 4. Loop over 'gameEvents' and log each event with its timing and half of the game
gameEvents.forEach((event, minute) => {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
});