import React from "react";

function Scoreboard({ score, formData }) {
  const { player1, player2 } = formData;
  return (
    <div className="Scoreboard">
      <p>
        {player1 ? player1 : "Player 1"} - {score.xScore}
      </p>
      <p>
        {player2 ? player2 : "Player 2"} - {score.oScore}
      </p>
    </div>
  );
}

export default Scoreboard;
