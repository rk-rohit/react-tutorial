import React from "react";
import {StyleWrapper, StyleWrapperContainer} from '../hoc/StyleWrapper'

const ButtonOne = (props)=> {
    return (
        <button style={props.styles}>Button</button>
    )
}

export default StyleWrapperContainer(StyleWrapper(ButtonOne));