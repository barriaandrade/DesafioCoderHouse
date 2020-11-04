import React, { useState } from "react";
import Header from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

function App() {
  const [total, setTotal] = useState(0);

  const handleAdd = (amount, stock, initial) => {
    if (stock >= amount) {
      setTotal(total + amount);
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header productos={total}></Header>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <ItemListContainer title={"Productos"}></ItemListContainer>
            <ItemDetailContainer title={"Super Mario 3"}></ItemDetailContainer>
          </Route>
          <Route path="/otrocomponente">
            <p>Este es otro componente</p>
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
