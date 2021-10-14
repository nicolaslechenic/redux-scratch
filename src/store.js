import { createStore } from "redux";
import { mathReducer } from "./Reducers/mathReducer";

const initialValues = {
  values: [8, 14, 9, 8, 6, 5, 17]
}

export const store = createStore(mathReducer, initialValues)