import React from 'react';

const titleURL = 'http://localhost:3000/lists/'
const taskURl = 'http://localhost:3000/tasks/'

export default class Edit extends React.Component{

    state={
        title: '',
        task:'',
        result: '',
        result2: ''
    }
   
    handleChange = (e) => { 
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value // note: e.target.name will use the name of the inputs used inside the form
        })
    }

    async updateTitle(e){
        e.preventDefault()
        
        const newTitle = this.state.title
        
        const response = await fetch( titleURL + this.props.titleId ,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                title: newTitle
            })
        })
        if( response.status === 200 ){ // this is a status code - successful request
            const data = await response.json()
            console.log(data)
             this.setState({
                 result: data
             })
        }else{
            console.log(response)
        }
        // .then( resp => resp.json() )
        // .then( updatedTitle => console.log(updatedTitle))
    };

    async updateTask(e) {
        e.persist()

        const newTask = this.state.task

        const response = await fetch( taskURl + this.props.taskId ,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                description: newTask
            })
        })
        if( response.status === 200 ){  // this is a status code - successful request
            const data = await response.json()
            console.log(data)
             this.setState({
                 result2: data
             })
        }else{
            console.log(response)
        }
    };

    async handleSubmit(e){
        e.preventDefault()
        // const title = this.state.result
        // const task = this.state.result2
        
        await this.updateTitle(e)
        await this.updateTask(e)
    };

    render(){
        
        // console.log(this.props.id)
        // console.log(this.props.titleId)
        // console.log(this.props.taskId)

        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
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