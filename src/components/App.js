import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

/* Summary of the workflow of the application
------------------
1. When user select an option for pet category
   > It displays the selected option in the <select> element
     in Filters component

   via #onChange in <select> element
------------------
2. When user clicks the 'Find pets' button
   > It displays the filtered pets in 'PetBrowser' component

   via updating App.state.filtered and App.state.pets.
   Then App will re-render the PetBrowser and pass updated
   props to PetBrowser
------------------
3. When user clicks on 'Adopt pet' button
   > It removes the button from pet and display 'Already adopted'

   via updating the state of App.state.pets and App.state.adoptedPets
------------------
*/

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.handleChangeFilterType = this.handleChangeFilterType.bind(this)
    this.fetchPets = this.fetchPets.bind(this)
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }

  fetchPets() {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

// Does it work or should I use Object.assign({}, this.state.filters, {}) ?
  handleChangeFilterType(type){
    this.setState({
      filters: {
        type: type
      }
    })
  }

  handleAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters}
                       onChangeType={this.handleChangeFilterType}
                       onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
