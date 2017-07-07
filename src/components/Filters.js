const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
    
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(ev){
    this.props.onChangeType(ev.target.value); // onChangeType = App.handleChangeFilterType
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleSelect} value={this.props.filters.type} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
