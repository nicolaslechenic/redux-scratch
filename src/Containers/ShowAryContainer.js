import ShowAryComponent from "../Components/ShowAryComponent";
import { connect } from 'react-redux';

export const ShowAryContainer = connect(
  state => ({values: state.values}),
  _dispatch => ({})
)(ShowAryComponent)
