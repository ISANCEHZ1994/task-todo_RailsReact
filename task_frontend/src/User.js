import React from 'react';
import UserForm from './UserForm';

export default class User extends React.Component{

    state={
        showForm: false,
        setUser: []
    };

    handleFormButton = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    };
 
    handleShowUserForm = () => {
        if(this.state.showForm === true){
            return(
                <div>
                    <UserForm/>
                </div>
            )
        }
    };
 
    render(){
        return(
            <div>
               <h1> Please Select One! </h1>
               <button onClick={this.handleFormButton}> New User? </button>
               <button > Been Here Before?</button>
               {this.handleShowUserForm()}
               <br></br>
                here I want to CHECK if there is already a user or use the new one
            </div>
        )
    }

}