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

    editFromContainer = () => {
        if( this.state.show === true){
            return(
                <div>
                    <EditForm/>
                </div>
            )
        }
    }

    render(){
        console.log(this.state.show)

        return(

            <div>
                <h1> {this.props.name} </h1>
                <h2>{this.props.title}</h2>
                <p> {this.props.todo} </p>
                <button onClick={this.handleEditForm}> Update </button>
                {this.editFromContainer()}
            </div>
        )
    };

};
