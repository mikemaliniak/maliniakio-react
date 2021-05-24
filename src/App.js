import React, { Component } from 'react';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux + Actions
import { connect } from 'react-redux';
import { getProjects } from './actions';

// Styling
import './components/styles/App.scss';

// Components
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './components/Project';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import NotFound from './components/NotFound';

class App extends Component {

  componentDidMount() {
    // Get Projects
    this.props.getProjects();
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
                {/* <Route exact path='/project/:name' render={routeParams => <Project {...routeParams} />}></Route> */}
                <Route exact path='/skills' component={ Skills }></Route>
                <Route exact path='/contact' component={ Contact }></Route>
                {/* <Route component={ NotFound } /> */}
              </Switch>
            </div>
            <Footer />
        </Router>
    );
  }
}

export default connect(null, { getProjects })(App);
