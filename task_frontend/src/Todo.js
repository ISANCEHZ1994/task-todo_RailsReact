import React from 'react';
import EditForm from './EditForm';

export default class Todo extends React.Component{

    state={
        show: false
    };

    handleEditForm = () => {
        this.setState({
            show: !this.state.show
        })
    };

    handleId = () => {
        
    };

    editFromContainer = () => {
        if( this.state.show === true){
            return(
                <div>
                    <br></br>
                    <EditForm id={this.props.id}/>
                </div>
            )
        }
    }

    render(){


        return(

            <div>
                <h1> {this.props.name} </h1>
                <h2>{this.props.title}</h2>
                <p> {this.props.todo} </p>
                <button onClick={this.handleEditForm}> Change Something? </button>
               
                {this.editFromContainer()}
            </div>
        )
    };

};
