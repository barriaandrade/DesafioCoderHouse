import React from 'react'
import Item from '../item/Item'

const ItemList = ({items}) => {

    console.log(items);

    return (
        <div className="row">
           { items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl}></Item>)}
            
        </div>
    )
}

export default ItemList
