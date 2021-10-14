import React from "react";

export default function ShowAryComponent({values}) {
  return <>
    <h1>Ajouter ou soustraire 1 à toutes les valeurs</h1>
    {values.map((v,i) => <span key={i}> {v} /</span>)}
    <br/>
  </>;
}