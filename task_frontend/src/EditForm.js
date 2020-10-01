import React from 'react';

export default class Edit extends React.Component{

    state={
        newTitle: '',
        newTask:''
    }



    render(){

        return(
            <div>
                <form>
                    <label>
                        Title:
                        <input type='text' name='Title' placeholder='Update Title'></input>
                    </label>
                    <label>
                        Task:
                         <input type='text' name='Task' placeholder='Update Task'></input>
                    </label>
                   
                </form>
            </div>
        )
    };
};