import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App" onScroll={this.update}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ fontSize: this.state.position * 0.1 }}>
            Profile goes here...
          </p>
        </header>
      </div>
    );
  }
}

export default App;
