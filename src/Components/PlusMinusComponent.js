import React from "react";

export default function PlusMinusComponent({values, handleAdd, handleSubstract}) {
  return <>
    <h1>Ajouter ou soustraire 1 à toutes les valeurs</h1>
    {values.map((v,i) => <span key={i}> {v} /</span>)}
    <br/>
    <button onClick={() => handleAdd([1,1,1,1,1,1,1])} >+</button>
    <button onClick={() => handleSubstract([1,1,1,1,1,1,1])} >-</button>
  </>;
}
