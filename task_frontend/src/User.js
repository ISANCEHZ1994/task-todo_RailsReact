import React from 'react';


export default class User extends React.Component{


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
                    <input type="submit" value="Submit" /> {/* when this is pressed a new user is created */}
                </form>
            </div>
        )
    }
};