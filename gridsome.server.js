module.exports = function (api) {
  api.loadSource(async store => {
    // const players = store.getCollection('Player').data();
    // const matches = store.getCollection('Matches').data();

    //   let wins = [];
    //   let losses = [];

    //   matches.forEach(match => {
    //     let winner = (match.player1Score > match.player2Score) ?
    //       match.player1 :
    //       match.player2;
    //     let loser = (winner == match.player1) ? match.player2 : match.player1;

    //     wins.push(winner);
    //     losses.push(loser);
    //   });

    //   wins = wins.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    //   losses = losses.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

    //   players.forEach(player => {
    //     player.wins = wins[player.id] || 0;
    //     player.losses = losses[player.id] || 0;
    //   });
  });
}
