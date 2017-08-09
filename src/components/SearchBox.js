import React from 'react';
import {setSearchText} from '../actions';
import { connect } from 'react-redux';



function SearchBox(props) {
  return (
    <input placeholder="search"
      onChange={ (e) =>{
        e.preventDefault();
        props.setSearchText(e.target.value);
      } } />
  )
}

function mapDispatchToProps(dispatch){
 return {
   setSearchText:function(text){
     dispatch(setSearchText(text));
   }
 }
}
export default connect(null, mapDispatchToProps)(SearchBox);;
