import React, { Component } from 'react';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux + Actions
import { connect } from 'react-redux';
import { getProjects } from './actions';

// Styling
import './styles/App.scss';
import './App.css';

// Components
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './components/Project';
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
    // Get Projects
    this.props.getProjects();
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
        <Router>
          <div className="App" onScroll={this.update}>
            {/* Navigation */}
            <Navbar />
            {/* Routes Start Here */}
            <Route  exact path='/' component={Home} />
            <Switch>
              <Route exact path='/projects' component={ Projects }></Route>
              <Route exact path='/project/:name' render={routeParams => <Project {...routeParams} />}></Route>
              <Route exact path='/skills' component={ Skills }></Route>
            </Switch>
          </div>
          <Footer />
        </Router>
    );
  }
}

export default connect(null, { getProjects })(App);
