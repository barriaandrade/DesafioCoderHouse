import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemList from "./itemList/ItemList";

//  const getItems = () =>{
//      return new Promise((res, rej) => {
//          setTimeout(() =>{
//              res([{id: 1, title: "SuperMario 3", price: 1000, pictureUrl: "https://media.vandal.net/m/22729/super-mario-bros-3-cv-2013122414722_1.jpg" },
//          {id: 2, title: "Zelda ", price: 2000, pictureUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/02/legend-zelda-caratula.jpg?itok=v7YayVPx"}])
//          },2000)

//      });
// }

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
    // const gamesCollection = db.collection("items").where('categoryID', '==', 'juego');
    // const bookCollection = db.collection("items").where('categoryID', '==', 'libro');

    // getItems().then((items) => {
    //   setItems(items);
    // });
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
