import React from 'react';
import CartWidget from './components/cartWidget/CartWidget.jsx';
import Header from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import NavBar from './components/navBar/NavBar.jsx';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <ItemListContainer title={"Productos"}></ItemListContainer>
    </div>
  );
}

export default App;
