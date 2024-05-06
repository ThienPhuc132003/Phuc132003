import axios from 'axios';
import React, { Component } from 'react';
import Snowfall from 'react-snowfall';
class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: ''
    };
  }
  render() {
    return (
      <div className="align-centerr">
        <h2 className="text-center">ACTIVE ACCOUNT</h2>
        <form>
          <table className="align-center">
            <tbody>
              <tr>
                <td><b>ID</b></td>
                <td><input type="text" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }} placeholder="Enter your ID" /></td>
              </tr>
              <tr>
                <td><b>Token</b></td>
                <td><input type="text" value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }} placeholder="Enter your ID Token" /></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="ACTIVE" onClick={(e) => this.btnActiveClick(e)} /></td>
              </tr>
            </tbody>
          </table>
        </form>
        <Snowfall snowflakeCount={100} style={{ zIndex: 9999 }} />
      </div>
    );
  }
  // event-handlers
  btnActiveClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const token = this.state.txtToken;
    if (id && token) {
      this.apiActive(id, token);
    } else {
      alert('Please input id and token');
    }
  }
  // apis
  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Active;

