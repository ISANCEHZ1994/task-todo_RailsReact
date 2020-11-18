import React from 'react';
import EditForm from './EditForm';
// import User from './User';

export default class Todo extends React.Component{

    state={
        show: false,
        
    };

    handleEditForm = () => {
        this.setState({
            show: !this.state.show
        })
    };

    // handleId = () => {
        
    // };

    editFromContainer = () => {
        if( this.state.show === true){
            return(
                <div>
                    <br></br>
                    <EditForm 
                    id={this.props.id}
                    titleId={this.props.titleId}
                    taskId={this.props.todoId}
                    />
                </div>
            )
        };
    };

    render(){

        return(

            <div>
                {/* <User/> */}
                <h1> {this.props.name} </h1>
                <h2>{this.props.title}</h2>
                <p> {this.props.todo} </p>
                <button onClick={this.handleEditForm}> Change Something? </button>
               
                {this.editFromContainer()}
            </div>
        )
    };

};
