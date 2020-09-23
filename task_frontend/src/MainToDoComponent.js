import React from 'react';
import User from './User';

const usersURL = 'http://localhost:3000/users'

export default class Main extends React.Component{

    state={
        users: []
    }
    // NOTE: List and Tasks are arrays!!

    componentDidMount(){
        fetch( usersURL )
        .then( resp => resp.json() )
        .then( users => {
            this.setState({
                users
            })
        })
    };

    render(){
        console.log(this.state.users)
        return(
            <div> 
                <User/>
                Here is the main Component //Maybe Style?

            </div>
        )
    }

};