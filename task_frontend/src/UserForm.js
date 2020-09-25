import React from 'react';

const usersURL = 'http://localhost:3000/users'

export default class UserForm extends React.Component{

    state={
        name:'',
        email:''
    }

    createNewUser = (e) => {
        e.preventDefault()

        const newName = this.state.name
        const newEmail = this.state.email

        fetch(usersURL,{
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                name: newName,
                email: newEmail
            })
        })
        .then( respon => respon.json)
        .then( createdUser => console.log(createdUser))

    }; // CLOSE createNewUser 

    handleChange = (e) => { 
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value // note: e.target.name will use the name of the inputs used inside the Form Component
        })
    }

    render(){

        // console.log(this.state.name)
        // console.log(this.state.email)

        return(

            <div style={{textAlign:'center'}}>
                <form  onSubmit={ (e) => this.createNewUser(e)}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={(e) => this.handleChange(e)}/>
                    </label>
                    <br/>
                    <label>
                        Email:
                        <input type="text" name='email' onChange={(e) => this.handleChange(e)}/>
                    </label>
                    <input type="submit" value="Submit" /> {/* when this is pressed a new user is created with ONLY their todo list showing */}
                </form>
            </div>
        )
    }
};