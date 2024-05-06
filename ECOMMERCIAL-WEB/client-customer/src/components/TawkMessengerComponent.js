import React, { Component } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

class TawkMessenger extends Component {
  render() {
    return (
      <>
        <TawkMessengerReact propertyId='65631be1ba9fcf18a80ef690' widgetId='1hg5i9qc8' />
        <div onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className='top' class="to-top">^</div>
      </>
    );
  }
}
export default TawkMessenger;