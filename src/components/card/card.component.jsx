import React from "react";
import './card.style.css'

export const Card = (props) => (
  <div className="card-container">
      <img alt ="monster" src={`https://robohash.org/${props.leMonsteur.id}?set=set2&size=180x180`}></img>
    <h1 key={props.leMonsteur.id}> {props.leMonsteur.name}</h1>
  </div>
);
