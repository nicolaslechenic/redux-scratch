import { connect } from 'react-redux';

import PlusMinusComponent from "../Components/PlusMinusComponent";
import { addAction, substractAction } from "../Actions/mathActions";

export const PlusMinusContainer = connect(
  state => ({ values: state.values }),
  dispatch => ({ 
    handleAdd: ary => dispatch(addAction(ary)),
    handleSubstract: ary =>  dispatch(substractAction(ary))
  })
)(PlusMinusComponent)