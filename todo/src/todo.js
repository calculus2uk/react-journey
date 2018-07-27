import React from 'react';

const Todo = (props) => {
    return (<li> {props.singletodo}<button onClick={props.delete}>X</button></li>);
}

export default Todo;
