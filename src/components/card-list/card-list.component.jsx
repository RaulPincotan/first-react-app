import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = props => ( 
    <div className="card-list">
      {props.monstrii.map((monster) => (
        <Card leMonsteur={monster} />
      ))}
    </div>
  );

