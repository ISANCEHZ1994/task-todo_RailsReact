import React from 'react';

// export default class Todo extends React.Component{
//     render(){
//         return(
//             <div>
//             </div>
//         )
//     }
// };

function Todo(props){
    return(
        <div>
            <h1> {props.name} </h1>
            <p> {props.todo} </p>
            <p>{props.title}</p>
        </div>
    )
};

export default Todo;