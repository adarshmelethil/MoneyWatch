import React from 'react';
// import logo from './logo.svg';
import './creative.css';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import Stakeholders from './Components/Stakeholders';
import UserResearch from './Components/UserResearch';
import Prototype from './Components/Prototype';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.Sections = {}

    this.handleScroll = this.handleScroll.bind(this);
    this.scrollOnHome = this.scrollOnHome.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY < 100){
      this.nav.className = "navbar navbar-expand-lg navbar-light fixed-top py-3"
    }else {
      this.nav.className = "navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled"
    }
  };

  scrollOnHome(pagePosition) {
    this.navBar.className = "collapse navbar-collapse"
    scrollToComponent(pagePosition, { offset: -72, align: 'top', duration: 1500});
    // console.log(pagePosition.scrollY);
  }

  render() {
    return (
      <Router className="App">
        <div id="pagetop" ref={(section) => { this.PageTop = section; }}>
          {/* <!-- Navigation --> */}
          <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" ref={(nav) => { this.nav = nav }}>
            <div className="container">
              <Link className="navbar-brand js-scroll-trigger nav-button"  to="/MoneyWatch" onClick={() => this.scrollOnHome(this.PageTop)}>Money Watch</Link>
              <Link className="navbar-toggler navbar-toggler-right" to="/MoneyWatch" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </Link>
              <div className="collapse navbar-collapse" id="navbarResponsive" ref={(navBar) => { this.navBar = navBar }}>
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger nav-button" to="/MoneyWatch" onClick={() => this.scrollOnHome(this.Sections.About)}>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger nav-button" to="/MoneyWatch" onClick={() => this.scrollOnHome(this.Sections.Services)}>Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger nav-button" to="/MoneyWatch" onClick={() => this.scrollOnHome(this.Sections.Portfolio)}>Personas</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger nav-button" to="/MoneyWatch" onClick={() => this.scrollOnHome(this.Sections.Interview)}>Interview</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-button" to="/MoneyWatch/UserResearch">User Research</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-button" to="/MoneyWatch/Stakeholders">Stakeholders</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-button" to="/MoneyWatch/Prototype" href="pages/prototype.html">Prototype</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/MoneyWatch" 
            render={(routeProps) => (
              <Home {...routeProps} Sections={this.Sections}/>
            )}
          />
          <Route exact path="/MoneyWatch/Stakeholders" 
            render={(routeProps) => (
              <Stakeholders {...routeProps}/>
            )}
          />

          <Route exact path="/MoneyWatch/UserResearch" 
            render={(routeProps) => (
              <UserResearch {...routeProps}/>
            )}
          />

          <Route exact path="/MoneyWatch/Prototype" 
            render={(routeProps) => (
              <Prototype {...routeProps}/>
            )}
          />
          
          {/* <!-- Footer --> */}
          <footer className="bg-light py-5">
            <div className="container">
              <div className="small text-center text-muted">Copyright &copy; 2019 - Money Watch</div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
