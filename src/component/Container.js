import React from 'react';
import {StyleWrapperContainer} from '../hoc/StyleWrapper';

const Container = (props)=> {
    return (
        <div style={props.styles}>
            <h3>This is Container</h3>
        </div>
    )
}

export default StyleWrapperContainer(Container);

