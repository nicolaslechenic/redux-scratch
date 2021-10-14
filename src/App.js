import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';

import { mathReducer } from "./Reducers/mathReducer";
import { ShowAryContainer } from "./Containers/ShowAryContainer";
import { PlusMinusContainer } from "./Containers/PlusMinusContainer";

const initialValues = {
  values: [8, 14, 9, 8, 6, 5, 17]
}

const store = createStore(mathReducer, initialValues)

render(
  <Provider store={store}>
    <ShowAryContainer />
    <PlusMinusContainer />
  </Provider>,
  document.getElementById("wrapper")
)