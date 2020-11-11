import React, { useState } from "react";
import Header from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header productos={0}></Header>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <ItemListContainer title={"Productos"}></ItemListContainer>
          </Route>
          <Route exact path="/itemDetail/:itemId">
            <ItemDetailContainer></ItemDetailContainer>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
        </Switch>
        {/* <div className="container" style={{paddingTop: 30}}>
        <div className="row">
          <ItemCount onAdd={handleAdd} stock={10} initial={1} ></ItemCount>
          <ItemCount onAdd={handleAdd} stock={30} initial={1} ></ItemCount>
        </div>
      </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
