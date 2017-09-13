import styled,{css} from 'styled-components';
import React, { Component, PropTypes } from 'react';
var style1={

    height: '25px',
    width: '100%',
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderWidth: '0px 0px 1px 0px',
    borderColor: "darkred",
    outline:0,

};

//stateless component
const Field = (props)=>(
    <div>

<input
    onChange={props.onChange}
    type="text"
       value={props.value} placeholder={props.label} style={style1}
       />
    </div>
);
Field.propTypes={
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,



};

export default Field;








