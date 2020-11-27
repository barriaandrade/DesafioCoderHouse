import React, { useState } from "react";
import Header from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import CartProvider from "./context/cartContext";
import FormContainer from "./components/formContainer/FormContainer";

function App() {
  return (
    <CartProvider defaultCart={[]}>
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <ItemListContainer title={"Productos"}></ItemListContainer>
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer title={"Productos"}></ItemListContainer>
            </Route>
            <Route exact path="/itemDetail/:itemId">
              <ItemDetailContainer></ItemDetailContainer>
            </Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
            <Route exact path="/order">
              <FormContainer title={"Formulario"}></FormContainer>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
