import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'ks1d', name: 'Ike', age: 28 },
      { id: 'ks2d', name: 'Yao', age: 41 },
      { id: 'ks3d', name: 'Tua', age: 2 }
    ],
    newPerson: null,
    showPersons: null
  };

  getPersonFeatures = event => {
    //get values from input field and split
    let [id, name, age] = event.target.value.split(', ');
    let fetchedNewPerson = { id, name, age };
    this.setState({ newPerson: fetchedNewPerson });
  };

  addPersonHandler = () => {
    let copyPersons = this.state.persons.slice();
    copyPersons.push(this.state.newPerson);

    this.setState({ persons: copyPersons, newPerson: null });
    //alert(this.state.newPerson)
  };

  switchNameHandler = newName => {
    // DONT CHANGE THE STATE LIKE THIS(IMMEDIATE CODE). ITS BAD PRACTICE
    // this.state.persons[0].name = 'Manna';

    // DO THIS RATHER
    this.setState({
      persons: [
        { name: newName, age: 100 },
        { name: 'Yao', age: 150 },
        { name: 'Tua', age: 200 }
      ]
    });
  };

  fetchNameHandler = (event, index) => {
    const personIndex = this.state.persons[index];
    const copyPerson = { ...this.state.persons[index] };

    copyPerson.name = event.target.value;

    const copyPersons = [...this.state.persons];
    copyPersons[index] = copyPerson;
    this.setState({ persons: copyPersons });
  };

  togglePersonsHandler = () => {
    const tempShowPerson = this.state.showPersons;
    this.setState({ showPersons: !tempShowPerson });
  };

  deletePersonHandler = personIndex => {
    //make a copy
    const personCopy = this.state.persons.slice();
    //const personCopy = [...this.state.persons]

    // Delete the item
    personCopy.splice(personIndex, 1);
    this.setState({ persons: personCopy });
  };
  render() {
    /*         const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        } */

    // Normal JS code can be written here
    let people = null;

    //let btnStyles = ''; // Using the styles after the eject

    if (this.state.showPersons) {
      people = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            fetchName={this.fetchNameHandler}
          />

          {/* This no longer needed coz a new Persons Component has been created *
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary>
                            <Person
                            //click={this.deletePersonHandler.bind(this, index)}

                            //Alternate to the bind method above is annonymous function
                            click={() => this.deletePersonHandler(index)}

                            // Toggles the persons div to show or hide
                            //click={this.switchNameHandler.bind(this, 'People')}
                            name={person.name}
                            age={person.age}
                            // this index as key isn't best. Not unique enough coz elemts will change
                            // and every elemt will have a diff index
                            key={person.id}
                 
                            fetchName={(event) => this.fetchNameHandler(event, index) } />
                            </ErrorBoundary> 
                    })}/}
                    {/* A JSX comment 

                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'People')}
                        fetchName={this.fetchNameHandler}>
                        I love reading
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                    />
                    */}
        </div>
      );
      //Change button color to red when person div shows
      //style.backgroundColor = 'red';
      //btnStyles = styles.Red;
    }
    // returns a string as 'red bold'
    //let styles = ['red', 'bold'].join(' ')

    return (
      <div className={styles.App}>
        <Cockpit
          switch={this.switchNameHandler}
          toggle={this.togglePersonsHandler}
          addPerson={this.addPersonHandler}
          getPerson={this.getPersonFeatures}
        />
        {people}
      </div>
    );
  }
}

export default App;
