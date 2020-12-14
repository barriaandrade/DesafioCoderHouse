import React, {useEffect, useState} from 'react'
import { getFirestore } from "../../firebase";
import ItemDetail from './itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { itemId } = useParams();

    console.log(item);
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items").doc(`${itemId}`);

        
        
        itemCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
           console.log("sin resultado");
         }
         
        setItem({id: itemId, ...querySnapshot.data()});
         });
    
      }, []);


    return (
   
            <div className="container" style={{paddingTop: 30}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <ItemDetail id={item.id} title={item.title} price={item.price} pictureUrl={item.imageId} description={item.description} stock={item.stock}></ItemDetail>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    )
}

export default ItemDetailContainer