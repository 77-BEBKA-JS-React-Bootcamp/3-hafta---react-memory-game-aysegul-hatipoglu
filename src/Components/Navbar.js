import React from "react";

class Navbar extends React.Component {
  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar">
        <div className="">Memory</div>
        <div className="">{name}</div>
        <div className="">Score: {score}</div>
      </div>
    );
  }
}

export default Navbar;
