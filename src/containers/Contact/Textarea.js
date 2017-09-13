import styled,{css} from 'styled-components';
import React, { Component, PropTypes } from 'react';
import Background from '../../assets/form_bg.jpg';
var style2={

    backgroundImage: `url(${Background})`,
    backgroundRepeat:"repeat-x",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderWidth: '1px 1px 1px 1px',
    borderColor: "darkred",


};
const Textarea = (props)=>(
    <div>

        <textarea rows="10" cols="65"
                  onChange={props.onChange}

                  value={props.value} placeholder={props.label} style={style2}
        />
    </div>
);
Textarea.propTypes={
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,



};

export default Textarea;