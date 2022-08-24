import React from "react";

function Beginning({ formData, handleChange, handleSubmit }) {
  return (
    <div className="beginning-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Player 1"
          onChange={handleChange}
          name="player1"
          value={formData.player1}
        ></input>
        <input
          type="text"
          placeholder="Player 2 "
          onChange={handleChange}
          name="player2"
          value={formData.player2}
        ></input>
        <button>Lets Play!</button>
      </form>
    </div>
  );
}

export default Beginning;
