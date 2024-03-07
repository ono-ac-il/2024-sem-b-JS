const matches = [
    {
        homeTeam: 'Real Madrid',
        guestTeam: 'Barcelona',
        result: '2:1',
        totalGoals: 3
    },
    {
        homeTeam: 'Manchester United',
        guestTeam: 'Chelsea',
        result: '1:1',
        totalGoals: 2
    },
    {
        homeTeam: 'Bayern Munich',
        guestTeam: 'Borussia Dortmund',
        result: '3:2',
        totalGoals: 5
    },
    {
        homeTeam: 'Paris Saint-Germain',
        guestTeam: 'Olympique Marseille',
        result: '2:0',
        totalGoals: 2
    }
]

function renderMatches(matches) {
    document.getElementById('games').innerHTML = matches.map(match => {
        return `
        <tr>
            <td>${match.homeTeam} - ${match.guestTeam}</td>
            <td>Result: ${match.result}</td>
            <td>Total goals: ${match.totalGoals}</td>
        </tr>
        `
    });

}

renderMatches(matches);

function filterByTotalGoals(el) {
    return el.totalGoals > minGoals;
}

var minGoals = 0;

function filterGames() {
    minGoals = Number(document.getElementById('f').value);
    const filteredMatches = matches.filter(filterByTotalGoals);
    renderMatches(filteredMatches);
}