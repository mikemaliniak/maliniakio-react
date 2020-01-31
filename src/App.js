import React, { Component } from 'react';
import logo from './assets/svg/logo.svg';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor () {
    super()

    this.state = {
      position : 0
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {

    let y = window.scrollY

    this.setState({
      position: y
    })
  }

  render () {
    return (
      <Provider store={store}>
        <div className="App" onScroll={this.update}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p style={{ fontSize: this.state.position * 0.1 }}>
              Profile goes here...
            </p>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
