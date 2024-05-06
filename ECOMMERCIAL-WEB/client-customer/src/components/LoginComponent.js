import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import Snowfall from 'react-snowfall';
//import CSS from '../login.css'; // Import file CSS cho Login
class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }
  render() {
    return (
      <div className="align-centerr">
        <h2 className="text-center">CUSTOMER LOGIN</h2>
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
                <td><b>Repeat Password</b></td>
                <td><input type="repeatpassword" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} placeholder="Enter your password again" /></td>
              </tr>
              <td className='box'>
                <input type="checkbox" defaultChecked="checked" name="remember" style={{ marginBottom: 15 }} /><b>Remember me</b>
              </td>
              <td>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a></td>



              <tr>
                <td></td>
                <td><input type="submit" value="LOGIN" onClick={(e) => this.btnLoginClick(e)} /></td>
              </tr>
            </tbody>
          </table>
        </form>
        <Snowfall snowflakeCount={100} style={{ zIndex: 9999 }} />
      </div>
    );
  }
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      alert('Please input username and password');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('/api/customer/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate('/home');
      } else {
        alert(result.message);
      }
    });
  }
}
export default withRouter(Login);