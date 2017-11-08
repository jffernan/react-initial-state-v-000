import React from 'react';

class Address extends React.Component {
  render() {
    const{street, city} = this.props;
    
      return (
        <div className="address">{street}, {city}</div>
      );
  }
}

export default Address;
