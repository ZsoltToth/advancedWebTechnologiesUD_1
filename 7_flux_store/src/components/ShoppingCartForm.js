import React from 'react'
import ShoppingCartActions from "../actions/ShoppingCartActions";

class ShoppingCartForm extends React.Component{


    constructor() {
        super();
        this.state = {
            name : '',
            description : '',
            price : 0
        };
    }

    render(){
        return (
            <table className="table">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td><input
                        type="text"
                        value={this.state.name}
                        onChange={(e) => {
                            this.setState({
                                name: e.target.value
                            });
                        }
                        }/>
                    </td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td><input
                        type="text"
                        value={this.state.description}
                        onChange={(e) => {
                            this.setState({
                                description: e.target.value
                            });
                        }
                        }/>
                    </td>
                </tr>
                    <tr>
                        <td>Price</td>
                        <td><input
                            type="number"
                            value={this.state.price}
                            onChange={(e) => {
                                this.setState({
                                    price: e.target.value
                                });
                            }
                            }/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button
                                className="btn btn-info"
                                onClick={()=>{ShoppingCartActions.insertItem(this.state)}}
                            >Add</button></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default ShoppingCartForm;
