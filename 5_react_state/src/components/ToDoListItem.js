import React from 'react'

var ToDoListItem = (props)=>{
    return (
        <tr key={props.todoItem.name}>
            <td>{props.todoItem.name}</td>
            <td>{props.todoItem.estimation}</td>
            <td>{props.todoItem.description}</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={(e)=>{
                        props.deleteAction(props.todoItem,e);
                    }}
                >
                    Delete</button>
            </td>
        </tr>
    )
}

export  default ToDoListItem
