import dispatcher from '../AppDispatcher'

class ShoppingCartActions {

    insertItem(item){
        dispatcher.handleViewAction({
            command : 'INSERT_ITEM',
            item : item
        });
    }

    removeItemById(id){
        dispatcher.handleViewAction({
            command : 'REMOVE_BY_ID',
            id : id
        });
    }
}

export default new ShoppingCartActions();
