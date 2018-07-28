import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
        return(
            <Person
            //click={this.deletePersonHandler.bind(this, index)}

            //Alternate to the bind method above is annonymous function
            click={() => props.clicked(index)}

            // Toggles the persons div to show or hide
            //click={this.switchNameHandler.bind(this, 'People')}
            name={person.name}
            age={person.age}
            // this index as key isn't best. Not unique enough coz elemts will change
            // and every elemt will have a diff index
            key={person.id}
 
            fetchName={(event) => props.fetchName(event, index) } />)
         });

export default persons;
