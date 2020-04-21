import React from 'react'
import ShoppingCart from '../stores/ShoppingCart'
import ShoppingCartActions from "../actions/ShoppingCartActions";

class DetailedShoppingList extends React.Component{


    constructor() {
        super();
        this.state = {cart : []};
        this.onChangeOfShoppingCart = this.onChangeOfShoppingCart.bind(this);
    }

    onChangeOfShoppingCart(){
        this.setState({
            cart : ShoppingCart._items
        });
    }

    componentDidMount() {
        ShoppingCart.addOnChangeListener(this.onChangeOfShoppingCart);
    }

    componentWillUnmount() {
        ShoppingCart.removeChangeListener(this.onChangeOfShoppingCart);
    }

    render() {
        return (
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.cart.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={()=>{ShoppingCartActions.removeItemById(item.id)}}
                                    >Delete</button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default DetailedShoppingList
