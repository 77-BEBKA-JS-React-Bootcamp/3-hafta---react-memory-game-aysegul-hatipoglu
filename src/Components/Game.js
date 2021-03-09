import React from "react";
import Images from "./Image";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Images endGame={this.props.endGame} />
      </div>
    );
  }
}

export default Game;
