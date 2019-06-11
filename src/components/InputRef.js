import React from 'react';

const InputRef = React.forwardRef((props, ref)=> {
    return (
        <input type='text' ref={ref}/>
    )
});

export default InputRef;