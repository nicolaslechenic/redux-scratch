import React from "react";

export default function PlusMinusComponent({handleAdd, handleSubstract}) {
  return <>
    <button onClick={() => handleAdd([1,1,1,1,1,1,1])} >+</button>
    <button onClick={() => handleSubstract([1,1,1,1,1,1,1])} >-</button>
  </>;
}