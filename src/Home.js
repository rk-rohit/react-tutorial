import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : [
                {
                    id : 1,
                    name : 'Rohit'
                }
            ]
        }
        console.log("This is construtor");
    }
    componentWillMount() {
        console.log("this is componentWillMount");
    }
    componentDidMount() {
        console.log("This is componentDidMount");
    }
    componentWillReceiveProps() {
        console.log("This is componentWillReceiveProps");
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log("this is shouldComponentUpdate", nextProps, nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("this is componentWillUpdate", nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("this is componentDidUpdate", prevProps, prevState);
    }
    componentWillUnmount() {
        console.log("this is componentWillUnmount");
    }

    handleClick = (args)=> {
        console.log("props", this.props);
        this.props.handleClick();
        this.setState({
            user : [
                { id : 1, name : 'Rahul' }
            ]
        })
    }
    render() {
        return (
            <div className="Home">
                <h2>{this.state.user[0].name}</h2>
                <button onClick={this.handleClick}>{this.props.btnName}</button>
            </div>
        )
    }
}

export default Home;