import React from 'react';

// const titleURL = 'http://localhost:3000/lists/'
// const taskURl = 'http://localhost:3000/tasks/'
const usersURL = 'http://localhost:3000/users/'


export default class Edit extends React.Component{

    state={

        title: '',
        task:'',
        result: '',


    }
   
    handleChange = (e) => { 
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value // note: e.target.name will use the name of the inputs used inside the form
        })
    }

    async updateTitle(e, id){
        e.preventDefault()
        
        const newTitle = this.state.title
        
        const response = await fetch( usersURL + id ,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                lists: newTitle
            })
        })
        if( response.status === 200 ){ // this is a status code - successful request
            const data = await response.json()
             this.setState({
                 result: data
             })
        }else{
            console.log(response)
        }
        // .then( resp => resp.json() )
        // .then( updatedTitle => console.log(updatedTitle))
    };

    // updateTask = (e) => {
    //     e.preventDefault()
    //     const newTask = this.state.task
    // };

    // async handleSubmit(e){
    //     e.preventDefault()
    // };

    render(){
        
        console.log(this.props.id)

        return(
            <div>
                <form onSubmit={(e) => this.updateTitle(e)}>
                    <label>
                        Title:
                        <input type='text' name='title' placeholder='Update Title' onChange={(e) => this.handleChange(e)}></input>
                    </label>
                    <label>
                        Task:
                         <input type='text' name='task' placeholder='Update Task' onChange={(e) => this.handleChange(e)}></input>
                    </label>
                    <input type="submit" value="UPDATE!" />
                </form>
            </div>
        )
    };
};