import React from "react";
import "../App.css"

class User extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="login">
          <form>
            <div className="form-group">
              <label>Adınız: </label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <button className="button" onClick={this.handleClick}>
              Başla
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default User;
