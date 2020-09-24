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
            <h2>{props.title}</h2>
            <p> {props.todo} </p>
            
        </div>
    )
};

export default Todo;