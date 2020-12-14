import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemList from "./itemList/ItemList";


const ItemListContainer = ({ title }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let itemCollection = db.collection("items");

    if (categoryId) {
      itemCollection = itemCollection.where("categoryId", "==", categoryId);
    }

    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("Sin resultados");
      }
      setItems(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, [categoryId]);

  return (
    <div className="container" style={{ paddingTop: 30 }}>
      <div className="row">
        <div className="col-md-12">
          <h3 style={{ marginBottom: 30 }}>{title}</h3>
          <div className="row">
            <div className="col-md-12">
              <ItemList items={items}></ItemList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
