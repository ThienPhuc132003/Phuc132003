import axios from 'axios';
import React, { Component } from 'react';
import Snowfall from 'react-snowfall';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
    };
  }
  render() {
    return (
      <div className="align-centerr">
        <h2 className="text-center">SIGN-UP</h2>
        <form>
          <table className="align-center">
            <tbody>
              <tr>
                <td><b>Username</b></td>
                <td><input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} placeholder="Enter your username" /></td>
              </tr>
              <tr>
                <td><b>Password</b></td>
                <td><input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} placeholder="Enter your password" /></td>
              </tr>
              <tr>
                <td><b>Name</b></td>
                <td><input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} placeholder="Enter your name" /></td>
              </tr>
              <tr>
                <td><b>Phone</b></td>
                <td><input type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} placeholder="Enter your phone number" /></td>
              </tr>
              <tr>
                <td><b>Email</b></td>
                <td><input type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} placeholder="Enter your mail" /></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="SIGN-UP" onClick={(e) => this.btnSignupClick(e)} /></td>
              </tr>
            </tbody>
          </table>
        </form>
        <Snowfall snowflakeCount={100} style={{ zIndex: 9999 }} />
      </div>
    );
  }
  // event-handlers
  btnSignupClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const account = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiSignup(account);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}
export default Signup;