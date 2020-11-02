import React, { useState } from "react";
import Header from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";
import NavBar from "./components/navBar/NavBar.jsx";

function App() {
  const [total, setTotal] = useState(0);

  const handleAdd = (amount, stock, initial) => {
    if (stock >= amount) {
      setTotal(total + amount);
    }
  };
  return (
    <div className="App">
      <Header productos={total}></Header>
      <NavBar></NavBar>
      <ItemListContainer title={"Productos"}></ItemListContainer>
      {/* <div className="container" style={{paddingTop: 30}}>
        <div className="row">
          <ItemCount onAdd={handleAdd} stock={10} initial={1} ></ItemCount>
          <ItemCount onAdd={handleAdd} stock={30} initial={1} ></ItemCount>
        </div>
      </div> */}
    </div>
  );
}

export default App;
