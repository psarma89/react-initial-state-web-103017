// Component Code Goes Here

// src/components/Address.js
import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullAddress: `${props.street}, ${props.city}`
    }
  }

  render() {
    return (
      <div className="address">
        {this.state.fullAddress}
      </div>
    );
  }
}

export default Address;
