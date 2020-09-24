import React from 'react';

const usersURL = 'http://localhost:3000/users'

export default class User extends React.Component{

    state={
        name:'',
        email:''
    }

    createNewUser = () => {
        e.preventDefault()
        fetch(usersURL,{
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                "User":{
                    name: null,
                    email: null
                }
            })
        })
        
        // .then( respon => respon.json)
        // .then( )

    }; // CLOSE createNewUser 

    handleChange = (e) => { 
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value // note: e.target.name will use the name of the inputs used inside the Form Component
        })
    }

    render(){

        return(

            <div style={{textAlign:'center'}}>
                <form >
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <br/>
                    <label>
                        Email:
                        <input type="text" name='email'/>
                    </label>
                    <input type="submit" value="Submit" /> {/* when this is pressed a new user is created with ONLY their todo list showing */}
                </form>
            </div>
        )
    }
};