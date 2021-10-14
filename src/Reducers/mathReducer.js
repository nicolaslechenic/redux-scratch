export const mathReducer = (state=initialValues, action) => {
  switch (action.type) {
    case "ADD":
      return { values: state.values.map((v, i) => v + action.payload.values[i]) }
    case "SUBSTRACT":
      return { values: state.values.map((v, i) => v - action.payload.values[i]) }
    default:
      return state
  } 
}