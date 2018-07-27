import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 


class App extends Component {
    state = {
        persons: [
            { id: 'ks1d',  name: 'Ike', age: 28 },
            { id: 'ks2d',  name: 'Yao', age: 41 },
            { id: 'ks3d',  name: 'Tua', age: 2 },
        ],
        showPersons: null

    }

    switchNameHandler = (newName) => {
        // DONT CHANGE THE STATE LIKE THIS(IMMEDIATE CODE). ITS BAD PRACTICE
        // this.state.persons[0].name = 'Manna';

        // DO THIS RATHER
        this.setState({
            persons: [
                {name: newName, age: 100 },
                {name: 'Yao', age: 150 },
                {name: 'Tua', age: 200 },
            ],
        })
    }


    fetchNameHandler = (event, index) => {
        
        const personIndex = this.state.persons[index]
        const copyPerson = { ...this.state.persons[index] }

        copyPerson.name = event.target.value;

        const copyPersons = [...this.state.persons];
        copyPersons[index] = copyPerson
        this.setState({ persons: copyPersons })
    }

    togglePersonsHandler = () => {
        const tempShowPerson = this.state.showPersons;
        this.setState({ showPersons: !tempShowPerson })
    }

    deletePersonHandler = (personIndex) => {
        //make a copy 
        const personCopy = this.state.persons.slice();
        //const personCopy = [...this.state.persons]


        // Delete the item
        personCopy.splice(personIndex, 1);
        this.setState({ persons: personCopy })
    }
    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        // Normal JS code can be written here
        let people = null;

        if (this.state.showPersons) {
            people = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
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
                    })}
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
            style.backgroundColor = 'red';
        }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">I am new to React</h1>
           
        </header>
        <p> Hello there!!! Is it working ?</p>
 
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Isaccccc!!')}>Click Me</button>
        <button style={style} onClick={this.togglePersonsHandler}> Toggle Persons</button>
            
        {people}
      </div>
        
      );
  }
}

export default App;