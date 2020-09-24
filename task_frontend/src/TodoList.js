import React from 'react';
import Todo from './Todo';

export default class Todolist extends React.Component{
    
    render(){
        // console.log(this.props.users.map( user => user.tasks.map(task => task.description)))
        return(
            
            <div>
                {this.props.users.map( user => 
                <Todo
                key={user.id}
                name={user.name}
                title={user.lists.map( title => title.title)}
                todo={user.tasks.map( task => task.description)}
                />)}
            </div>
        )
    }
};