import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';

import { store } from "./store";
import { PlusMinusContainer } from "./Containers/PlusMinusContainer";



render(
  <Provider store={store}>
    <PlusMinusContainer />
  </Provider>,
  document.getElementById("wrapper")
)