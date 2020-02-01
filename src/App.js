import React, { Component } from 'react';
// import logo from './assets/svg/logo.svg';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Styling
import './App.css';

// Components
import Home from './components/Home'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

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
        <Router>
          <div className="App" onScroll={this.update}>
            {/* Navigation */}
            <Navbar />
            {/* Routes Start Here */}
            <Route  exact path='/' component={Home} />
            <Switch>
              <Route exact path='/projects' component={ Projects }></Route>
              <Route exact path='/skills' component={ Skills }></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
