import React from 'react';
import styles from '../style/commonStyle'

const defaultStyle = (props)=> {
    let _styles = {...styles.default}
    if (props.defaultSize) {
        _styles = {..._styles, ...styles.defaultSize}
    }
    let newProps = {...props, styles :_styles}
    return newProps;
}

const defaultContainer = (props)=> {
    let _style = {...styles.container}
    if (props.containerBackground) {
        _style = {..._style, ...styles.containerBackground}
    }
    let newProps1 = {...props,styles : _style}
    return newProps1;
}

const StyleWrapper = (WrappedComponent) => {
    return (args) => {
        return WrappedComponent(defaultStyle(args));
    }
    // return (props) => {
    //     let newProps = defaultStyle(props);
    //     return WrappedComponent(newProps)
    // }
}

const StyleWrapperContainer = (WrappedComponent) => {
    return (props) => {
        return(
            <WrappedComponent {...defaultContainer(props)} />
        )
    }
}
export {StyleWrapper, StyleWrapperContainer};