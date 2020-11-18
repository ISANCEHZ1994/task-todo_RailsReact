import React from 'react';

export default class UserCheck extends React.Component{

    state={
        name:'',
        email:''
    };

    handleChange = (e) => { 
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value
        })
    };

    handleCheckUser = (e) => {
        // e.preventDefault()
        const typedUser = this.state.name // here we are grabing from state
        const typedEmail = this.state.email
        
        const usersArrayofObjects = this.props.passingUsers // passing from props

        const nameArray = usersArrayofObjects.map( users => users.name) // mapping to get specifc data
        const emailArray = usersArrayofObjects.map( users => users.email)

        // console.log(emailArray)
        const checkUser = nameArray.filter( user => user.includes(typedUser))
        const checkEmail = emailArray.filter( user => user.includes(typedEmail))

        // console.log(checkEmail)
        // return checkEmail
        // console.log(checkUser)
        
        // how can I RETURN both values??
    };

    render(){

        // console.log(this.props.passingUsers) passed successfully!
        console.log( this.handleCheckUser())
        // console.log(this.state.name,this.state.email)
        return(

            <div>
                <br></br>
                <form  onSubmit={(e) => this.handleCheckUser(e)}> 
                    <label>
                        Name:
                        <input type="text" name="name" onChange={(e) => this.handleChange(e)}/>
                    </label>
                    
                    <label>
                        Email:
                        <input type="text" name='email' onChange={(e) => this.handleChange(e)}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    };

};