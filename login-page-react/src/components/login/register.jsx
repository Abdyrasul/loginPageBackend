import React from "react";
import loginImg from "../../login.png";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3537/3537760.svg"
              alt="alt"
            />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
