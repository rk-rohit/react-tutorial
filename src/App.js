import React, {Component} from 'react';
import Home from './Home';

class App extends Component {
  state = {
    btnName : "Update User"
  }
  handleClick = (props) => {
    this.setState({
      btnName : "btn Update"
    })
  }
  render() {
    return (
      <div className="App">
        <Home handleClick={this.handleClick} btnName={this.state.btnName}/>
      </div>
    )
  }
}

export default App;
