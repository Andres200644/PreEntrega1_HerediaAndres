import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListConteiner greeting="Bienvenidos a runwayStyle nuestra tienda de ropa deportiva" />
        </div>
    );
}

export default App;