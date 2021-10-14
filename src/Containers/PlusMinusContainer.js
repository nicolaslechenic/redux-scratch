import PlusMinusComponent from "../Components/PlusMinusComponent";
import { addAction, substractAction } from "../Actions/mathActions";
import { connect } from 'react-redux';

export const PlusMinusContainer = connect(
  _state => ({}),
  dispatch => ({ 
    handleAdd: ary => dispatch(addAction(ary)),
    handleSubstract: ary =>  dispatch(substractAction(ary))
  })
)(PlusMinusComponent)