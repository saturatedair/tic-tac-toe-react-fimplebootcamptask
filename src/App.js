import React, { useState, useEffect } from "react";
import Square from "./Components/Square";
import Patterns from "./Components/Patterns";
import Scoreboard from "./Components/Scoreboard";
import Beginning from "./Components/Beginning";
function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, SetPlayer] = useState("O");
  const [result, setResult] = useState({
    winner: "none",
    state: "none",
    show: false,
  });
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [formData, setFormData] = useState({
    player1: "",
    player2: "",
  });

  const [beginningForm, setBeginningForm] = useState(true);
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    setBeginningForm((prevBeginningForm) => !prevBeginningForm);

    event.preventDefault();
  }
  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player === "O") {
      SetPlayer("X");
    } else {
      SetPlayer("O");
    }
  }, [board]);

  useEffect(() => {
    if (result.show) {
      console.log(result.winner);
      if (result.winner === "X") {
        let { xScore } = scores;
        xScore++;
        setScores({ ...scores, xScore });
      } else {
        let { oScore } = scores;
        oScore++;
        setScores({ ...scores, oScore });
      }
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard((prevBoard) =>
      prevBoard.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        } else {
          return val;
        }
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "won", show: true });
      }
    });
  };
  const checkIfTie = () => {
    let filled = true;

    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "", state: "Tie", show: true });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    SetPlayer("O");
  };

  useEffect(() => {
    if (result.show) {
      setTimeout(() => {
        setResult({ ...result, show: false });
      }, 1500);
    }
  }, [result]);

  return (
    <div>
      {beginningForm ? (
        <Beginning
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}

      <div className="App">
        <h1>Tic Tac Toe!</h1>

        <Scoreboard score={scores} formData={formData} />
        <div className="board">
          <div className="row">
            <Square
              val={board[0]}
              chooseSquare={() => {
                chooseSquare(0);
              }}
            />
            <Square
              val={board[1]}
              chooseSquare={() => {
                chooseSquare(1);
              }}
            />
            <Square
              val={board[2]}
              chooseSquare={() => {
                chooseSquare(2);
              }}
            />
          </div>
          <div className="row">
            <Square
              val={board[3]}
              chooseSquare={() => {
                chooseSquare(3);
              }}
            />
            <Square
              val={board[4]}
              chooseSquare={() => {
                chooseSquare(4);
              }}
            />
            <Square
              val={board[5]}
              chooseSquare={() => {
                chooseSquare(5);
              }}
            />
          </div>
          <div className="row">
            <Square
              val={board[6]}
              chooseSquare={() => {
                chooseSquare(6);
              }}
            />
            <Square
              val={board[7]}
              chooseSquare={() => {
                chooseSquare(7);
              }}
            />
            <Square
              val={board[8]}
              chooseSquare={() => {
                chooseSquare(8);
              }}
            />
          </div>
        </div>
        <button onClick={restartGame} className="reset-btn">
          Reset
        </button>

        {result.show && (
          <p className="result">{`${result.winner} ${result.state}`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
