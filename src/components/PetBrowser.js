const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {

  // what does index do here? Why pet needs to have id? 
  render() {
    //pass pets prop to <Pet /> components
    //onAdoptPet prop pass to <Pet onAdoptPet={}>
    //adobptedPets prop [] of adobptedPets , so we check array if it contains the pet id
    const petProps = this.props.pets.map((pet, index) => {
      return <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    });

    return (
      <div className="ui cards">
        {petProps}
      </div>
    );
  }
}

module.exports = PetBrowser;
