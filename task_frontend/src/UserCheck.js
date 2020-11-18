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
    }

    render(){
        return(
            <div>
                <br></br>
                <form  >
                    <label>
                        Name:
                        <input type="text" name="name" onChange={(e) => this.handleChange(e)}/>
                    </label>
                    
                    <label>
                        Email:
                        <input type="text" name='email' onChange={(e) => this.handleChange(e)}/>
                    </label>
                    <input type="submit" value="Return YOUR TODOS" /> {/* when this is pressed - will ONLY show user todo list */}
                </form>
            </div>
        )
    }

};