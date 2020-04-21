import React from 'react';
import './App.scss';
import ShoppingCartForm from "./components/ShoppingCartForm";

function App() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12"><ShoppingCartForm/></div>
        </div>
        <div className="row">
          <div className="col-md-3">Brief List</div>
          <div className="col-md-9">Detailed List</div>
        </div>
    </div>
  );
}

export default App;
