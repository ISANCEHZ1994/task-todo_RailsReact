import React from 'react';
import Todo from './Todo';

export default class Todolist extends React.Component{
    
    render(){
        
        // console.log(this.props.users.map( user => user.tasks.map( task => task.id)))
        return(
            
            <div>
                {this.props.users.map( user => 
                <Todo
                id={user.id}
                key={user.id}
                name={user.name}
                titleId={user.lists.map( title => title.id)}
                title={user.lists.map( title => title.title)}
                todoId={user.tasks.map( task => task.id)}
                todo={user.tasks.map( task => task.description)}
                />)}
            </div>
        )
    }
};