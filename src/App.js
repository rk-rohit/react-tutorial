import React, {Component} from 'react';
import ButtonOne from './component/ButtonOne';
import Container from './component/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container containerBackground/>
        <ButtonOne defaultSize/>
      </div>
    );
  }
}

export default App;
