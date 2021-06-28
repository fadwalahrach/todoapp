import React from 'react'
import './TodoApp.css'
class TodoApp extends React.Component{ 

   constructor(props){
       super(props)
       this.state = {
           todos: [{id:1, task:'eating', status:true},{id:2, task:'coding', status:true}],
           toggleStatus: false,
           edit : {id : null, task : ''}
           //to push each task as objects
           // ex: todo = [{id:1, task:'something', status:true}]
       }

       this.inputEl = React.createRef()
   }
   

   addTodo = () => { 
       //Adding todo
       this.setState(prevState => ({
         todos: [...prevState.todos, {
             id: prevState.todos[this.state.todos.length - 1].id + 1,
             task: this.inputEl.current.value,
             status: false
         }]
         // I MUTATED the array 
       }))
   }


   removeTodo = (el) => {
       //remove Todo
       this.setState({
           todos: this.state.todos.filter(i => i.id !== el)
       })
   }

   editTodo = (id, task) => {
      
    // let filteredList = this.state.todos.filter(xar => xar.id !== id)
  
    // this.setState({
    //     todos: [...filteredList, 
    //         {
    //           id : id,
    //           task : el.target.value,
    //           status : false  
    //     }]
    // })
    let updatedTodos = this.state.todos.map(todo => {
        if(todo.id===id){
            todo.task = task;
        }
        return todo;
    });
    this.setState({
        todos : updatedTodos,
        toggleStatus: false,
        edit : {id : null, task : ''}
    })
   }


    render(){
        return(
            <>
            <input type='text' ref={this.inputEl}/>
            <button onClick={this.addTodo}>Add</button>
            
            {this.state.todos.map(e => (
                <>
                    <div>{e.id + ' - ' + e.task}
             
                    <div id={this.state.toggleStatus ? '' : 'editing'}>
                        <input type='text' onChange={(evt) => this.setState({edit : {id: e.id , task: evt.target.value}})}/>
                        <button onClick={() => this.editTodo(this.state.edit.id,this.state.edit.task)}>Update</button>
                    </div>
                        <button onClick={()=> this.removeTodo(e.id)}>Delete</button>
                        <button onClick={()=>this.setState(prevState => ({toggleStatus: !prevState.toggleStatus}))}>Edit</button>
                    </div>
                </>
            ))}
            </>
        )
    }
}

export default TodoApp