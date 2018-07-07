import React from "react";
import "./InventoryCard.css";

const InventoryCard = props => (

<div className="card">
  <h5 className="card-header">Inventory</h5>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <a href="" className="btn btn-primary">Select</a>
  </div>
</div>

);

export default InventoryCard