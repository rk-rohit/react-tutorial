import React, {Component} from 'react';
import InputRef from './InputRef';

class Login extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleSubmit = ()=> {
        console.log('ref', this.inputRef.current.value)
    }
    render() {
        return(
            <div>
                Name : <InputRef ref={this.inputRef }/>
                <input type='submit' value='submit' onClick={this.handleSubmit}/>
            </div>
        )
    }
}

export default Login;