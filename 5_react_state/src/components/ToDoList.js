import React from 'react'

class  ToDoList extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            form : {
                name : 'Change Tires',
                description : 'There are 4 tires.',
                estimation : 2.5
            },
            todos : []
        };
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        let st = this.state;
        st.form.name = event.target.value;
        this.setState(st);
    }

    deleteToDoItem(todoItem){
        let st = this.state;
        st.todos = this.state.todos.filter((curTodo)=>{
            return todoItem.name !== curTodo.name;
        });
        this.setState(st);
    }

    render() {
        return (
            <div>
                <div className="row">
                <h1>Form</h1>
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input
                                    type="text"
                                    value={this.state.form.name}
                                    onChange={this.handleNameChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                <input
                                    type="text"
                                    value={this.state.form.description}
                                    onChange={(e)=>{
                                        let st = this.state;
                                        st.form.description = e.target.value;
                                        this.setState(st);
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Estimation</td>
                            <td>
                                <input
                                    type="number"
                                    value={this.state.form.estimation}
                                    onChange={(e)=>{
                                        let st = this.state;
                                        st.form.estimation = parseFloat(e.target.value);
                                        this.setState(st);
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button
                                    className="btn btn-info"
                                    onClick={()=>{
                                        let st = this.state;
                                        st.todos.push(st.form);
                                        st.form = {name : '', description: '', estimation: 0.0};
                                        this.setState(st);
                                    }}
                                >Add</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                <h1>To Do List</h1>
                    <table>
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Estimation</td>
                            <td>Description</td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                        <td>Sum:</td>
                        <td>{
                            this.state.todos.reduce(
                                (total,todo)=>{
                                    return total + todo.estimation
                                },0)
                        }</td>
                        <td>Count</td>
                        <td>{this.state.todos.length}</td>
                        </tr>
                        </tfoot>
                        <tbody>
                        {
                            this.state.todos.map((todoItem)=>{
                                return (
                                    <tr key={todoItem.name}>
                                        <td>{todoItem.name}</td>
                                        <td>{todoItem.estimation}</td>
                                        <td>{todoItem.description}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={(e)=>{
                                                  this.deleteToDoItem(todoItem,e);
                                                }}
                                            >
                                                Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ToDoList
