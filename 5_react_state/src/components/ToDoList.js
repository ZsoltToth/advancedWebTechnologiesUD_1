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
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Estimation</td>
                            <td>
                                <input
                                    type="number"
                                    value={this.state.form.estimation}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button className="btn btn-info">Add</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                <h1>To Do List</h1>
                </div>
            </div>
        );
    }
}

export default ToDoList
