import React from "react";
import style from './Card.module.css'

export default function Card(props) {
   return (
      <div className={style.carta}>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="foto de Ricky" /> 
      </div>
   );
}
// se puede hacer destructuring = function Card({name, species, gender, onclose,,image}) 