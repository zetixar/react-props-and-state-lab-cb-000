// import React from 'react'
const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name {this.props.pet.name}(gender: {this.props.pet.gender === 'male' ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted ? <button onClick={this.handleClick} className="ui primary button">Adopt pet</button> : <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

// export default Pet;
module.exports = Pet;
