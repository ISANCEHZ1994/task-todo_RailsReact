import React from 'react';
import UserCheck from './UserCheck';
import UserForm from './UserForm';

export default class User extends React.Component{

    state={
        showForm: false,
        setUser: [],
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
        }else{
            return(
                <div>
                    <UserCheck/>
                </div>
            )
        }
    };
 
    render(){
        return(
            <div>
               <h1> Create A Todo List </h1>
               <h3> Type In Your Name & Email Below!</h3>
               {this.handleShowUserForm()}
               <button onClick={this.handleFormButton}> New User? </button>
               <br></br>
            </div>
        )
    }

}