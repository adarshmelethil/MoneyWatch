import React from 'react';
import { Route, Link } from 'react-router-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'react-fancybox/lib/fancybox.css'

// Images
import InterviewProof from '../img/InterviewProof.JPG';
import UmairRaja from '../img/UmairRaja.png';
import DrumpTonald from '../img/personas/DrumpTonald.png';
import JeanneChapdelaine from '../img/personas/JeanneChapdelaine.png';
import SteveDaniel from '../img/personas/SteveDaniel.png';

// import FinalReport from './FinalReport';
import MoneyWatchFinalReport from '../pdf/MoneyWatchFinalReport.pdf';


import "react-pdf/dist/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFDownloadLink } from '@react-pdf/renderer'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const TRANSITION_TIME = 0;

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDrump: false,
      showSteve: false,
      showJeanne:false,
      numPages: null,
      pageNumber: 1
    };

    this.openDrump = this.openDrump.bind(this);
    this.closeDrump = this.closeDrump.bind(this);
    this.handleDrumpClick = this.handleDrumpClick.bind(this);

    this.openSteve = this.openSteve.bind(this);
    this.closeSteve = this.closeSteve.bind(this);
    this.handleSteveClick = this.handleSteveClick.bind(this);

    this.openJeanne = this.openJeanne.bind(this);
    this.closeJeanne = this.closeJeanne.bind(this);
    this.handleJeanneClick = this.handleJeanneClick.bind(this);
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  onButtonClicked = ({ pageNumber }) => {
    this.setState({
      pageNumber: pageNumber
    })
  }
  PreviousPage = ({}) => {
    if (this.state.pageNumber > 1) {
      this.setState(prevState => ({ pageNumber: prevState.pageNumber - 1 }))
    }
  }
  NextPage = ({}) => {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }))
    }
  }

  openDrump() {
    this.setState({
      showDrump: true
    });
  }
  closeDrump() {
    this.setState({
      showDrump: false
    });
  }
  handleDrumpClick(event) {
    if (this.boxDrump.contains(event.target)) {
      return;
    }
    this.closeDrump();
  }

  openSteve() {
    this.setState({
      showSteve: true
    });
  }
  closeSteve() {
    this.setState({
      showSteve: false
    });
  }
  handleSteveClick(event) {
    if (this.boxSteve.contains(event.target)) {
      return;
    }
    this.closeSteve();
  }

  openJeanne() {
    this.setState({
      showJeanne: true
    });
  }
  closeJeanne() {
    this.setState({
      showJeanne: false
    });
  }
  handleJeanneClick(event) {
    if (this.boxJeanne.contains(event.target)) {
      return;
    }
    this.closeJeanne();
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <div id="headerPopup" className="mfp-hide">
          <Document
            file={MoneyWatchFinalReport}
            onLoadError={(err) => console.log(err)}
            onLoadSuccess={this.onDocumentLoadSuccess}
            onItemClick={this.onButtonClicked}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <button className="btn btn-primary btnPrevious" onClick={this.PreviousPage}>Previous</button>
              </div>
              <div className="col-sm">
                <p className="alert alert-primary"><a href={MoneyWatchFinalReport}>Download</a></p>
              </div>
              <div className="col-sm">
                <p className="alert alert-primary">Page {pageNumber} of {numPages}</p>
              </div>
              <div className="col-sm">
                <button className="btn btn-primary btnNext" onClick={this.NextPage}>Next</button>
              </div>
            </div>
          </div>
          
          
          
        </div>
        {/* <!-- Masthead --> */}
          <header className="masthead">
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-10 align-self-end">
                  <h1 className="text-uppercase text-white font-weight-bold">Money makes the world go round</h1>
                  <hr className="divider my-4"/>
                  
                  <button className="btn btn-outline-danger popup-modal" target="_blank" id="headerVideoLink" href="#headerPopup" >Final Report!</button>
                  {/*
                  <button href="#headerPopup" id="headerVideoLink" target="_blank" className="btn btn-outline-danger popup-modal">Final Report!</button>

                  <div id="headerPopup" className="mfp-hide embed-responsive embed-responsive-21by9">
                    <iframe title="MoneyWatchDemo" width="560" height="315" src="https://www.youtube.com/embed/35hq-JhyyAo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  
                  <Route exact path="/MoneyWatch/FinalReport" 
                    render={(routeProps) => (
                      <FinalReport {...routeProps}/>
                    )}
                  />
                  */}

                </div>
                <div className="col-lg-8 align-self-baseline">
                  <p className="text-white-75 font-weight-light mb-5">Start making educated investing decisions backed up by data and visualization! Download and customize algorithms with a click of a button!</p>
                  <button className="btn btn-primary btn-xl js-scroll-trigger" onClick={() => this.scrollOnHome(this.Sections.About)}>Find Out More</button>
                </div>
              </div>
            </div>
          </header>
          
        {/* <!-- About Section --> */}
        <section className="page-section bg-primary about" ref={(section) => { this.props.Sections.About = section; }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Programmers got what you need!</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">Leverage the power of code using prebuilt modules and/or writing small scripts. Automate mundane tasks and create beautiful visualizations.</p>
                {/* <!-- <button className="btn btn-light btn-xl js-scroll-trigger" href="#services">More Information</button> --> */}
                <button type="button" className="btn btn-light btn-xl waves-effect waves-light" data-toggle="modal" data-target="#centralModalLGInfoDemo">More Information</button>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- More information Popup --> */}
        <div className="modal fade" id="centralModalLGInfoDemo" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
          <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
            {/* <!--Content--> */}
            <div className="modal-content">
              {/* <!--Header--> */}
              <div className="modal-header bg-primary">
                <p className="heading lead">Money Watch</p>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="white-text">&times;</span>
                </button>
              </div>

              {/* <!--Body--> */}
              <div className="modal-body">
                <div className="text-center">
                  <i className="fas fa-comments-dollar fa-4x mb-3 animated rotateIn"></i>
                    <p>Money Watch assists users doing market research by making programming more accessible. The individual will be able to create a process that are as simple as linear regress or as complicated as bleeding edge Artificial Intelligence machine learning algorithm with similar effort. We will accomplish this by making modules that are repeatable with and shareable among colleagues as well as communities. These modules could receive some, do some operation, and finally output some new information. These would then be chained together to create a money making machine!</p>
                    <p>As with any machine we want to be able to open it up and see what’s going on. This is where the graphics module comes in. This module will require some input which is used to create some graphics. These graphics could be bar graphs, line graphs or just some random image that will help the user understand his system, and or data.
                    Money Watch encourages creativity in order to make discoveries!</p>
                </div>
              </div>

              {/* <!--Footer--> */}
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
              </div>
            </div>
            {/* <!--/.Content--> */}
          </div>
        </div>

        {/* <!-- Services Section --> */}
        <section className="page-section services" ref={(section) => { this.props.Sections.Services = section; }}>
          <div className="container">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-brain text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Algorithms</h3>
                  <p className="text-muted mb-0">A large collection of algorithms to choose from!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Customizable</h3>
                  <p className="text-muted mb-0">Make the algorithms your own by setting the hyperparameters.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-clipboard-list text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Create a Workflow</h3>
                  <p className="text-muted mb-0">Connect your algorithms together to create a workflow pipeline.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-chart-pie text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Visualize Everything</h3>
                  <p className="text-muted mb-0">Our visualization modules can pull in data from any output, allowing for 100% interpretable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Personas Section --> */}
        <section className="portfolio" id="portfolio" ref={(section) => { this.props.Sections.Portfolio = section; }}>
          <div className="container-fluid p-0">
            <div className="row no-gutters">
          
                <div className="col-lg-4 col-sm-6">
                  <button className="portfolio-box" onClick={this.openDrump}>
                    <img className="img-fluid" alt="" src={DrumpTonald}/>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Drump Tonald
                      </div>
                      <div className="project-name">
                        The Business man
                      </div>
                    </div>
                  </button>
                </div>
                <div className="react-fancybox">
                  <ReactCSSTransitionGroup
                    style={{animationDuration: 1000}}
                    transitionName={'fade'}
                    transitionEnterTimeout={TRANSITION_TIME}
                    transitionLeaveTimeout={TRANSITION_TIME}>
                    {this.state.showDrump
                      ? (
                        <div className="box" onClick={this.handleDrumpClick}>
                          <div className="image-box" ref={box => this.boxDrump = box} >
                            <img alt="" style={{maxHeight: window.innerHeight * 0.9}} src={DrumpTonald}/>
                          </div>
                        </div>
                      ) : null}
                  </ReactCSSTransitionGroup>
                </div>
              


                <div className="col-lg-4 col-sm-6">
                  <button className="portfolio-box" onClick={this.openSteve}>
                    <img className="img-fluid" alt="" src={SteveDaniel}/>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Steve Daniel
                      </div>
                      <div className="project-name">
                        The Economist
                      </div>
                    </div>
                  </button>
                </div>
                <div className="react-fancybox">
                  <ReactCSSTransitionGroup
                    style={{animationDuration: 1000}}
                    transitionName={'fade'}
                    transitionEnterTimeout={TRANSITION_TIME}
                    transitionLeaveTimeout={TRANSITION_TIME}>
                    {this.state.showSteve
                      ? (
                        <div className="box" onClick={this.handleSteveClick}>
                          <div className="image-box" ref={box => this.boxSteve = box} >
                            <img alt="" style={{maxHeight: window.innerHeight * 0.9}} src={SteveDaniel}/>
                          </div>
                        </div>
                      ) : null}
                  </ReactCSSTransitionGroup>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <button className="portfolio-box" onClick={this.openJeanne}>
                    <img className="img-fluid" alt="" src={JeanneChapdelaine}/>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Jeanne Chapdelaine
                      </div>
                      <div className="project-name">
                        The Programmer
                      </div>
                    </div>
                  </button>
                </div>
                <div className="react-fancybox">
                  <ReactCSSTransitionGroup
                    style={{animationDuration: 1000}}
                    transitionName={'fade'}
                    transitionEnterTimeout={TRANSITION_TIME}
                    transitionLeaveTimeout={TRANSITION_TIME}>
                    {this.state.showJeanne
                      ? (
                        <div className="box" onClick={this.handleJeanneClick}>
                          <div className="image-box" ref={box => this.boxJeanne = box} >
                            <img alt="" style={{maxHeight: window.innerHeight * 0.9}} src={JeanneChapdelaine}/>
                          </div>
                        </div>
                      ) : null}
                  </ReactCSSTransitionGroup>
                </div>

            </div>
          </div>
        </section>

        {/* <!-- About Section --> */}
        <section className="page-section bg-primary interview" ref={(section) => { this.props.Sections.Interview = section; }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4" id="UmairRaja">
                <img alt="Umair Raja" className="img-fluid image--cover" src={UmairRaja}/>
                <button type="button" className="btn btn-light btn-xl waves-effect waves-light" data-toggle="modal" data-target="#proof">Proof!</button>
              </div>
              <div className="col-lg-8 text-white">

                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          What is your background as it relates to investing/trading?
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body bg-secondary">
                        I have competed in numerous trading competitions such as the BP Canada Trading Competition where I placed top 10, the Western Invitational Trading Competition where I placed 6th, and the Rotman International Trading Competition in Toronto where my team I placed 2nd out of 52 Universities across the world. I also spent the summer of 2018 day trading with an online group.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          How do you go about valuing a security; what is your process, the steps you generally take to value a security?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body bg-secondary">
                        Generally, I look at the fundamentals of a stock; a P/E ratio below the sector average, the price to book ratio to compare with the other companies in the sector, a PEG ratio below 1. Then I also analyse the balance and cash flow statements of the company to complete my fundamental analysis. Once this process is cleared, I look at some technicals to determine my entry point for the stock.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Do you do any programming, and/or are you interested in programming to automate parts of your process?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body bg-secondary">
                        No programming, but interested in learning how to code for algorithmic trading because there is a large potential to make money, it is very fast paced, accurate and can analyse and make trading decisions faster than any human can manually do.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Would it help if you could create a visualization of assumptions you may have? For example, how the price of stocks are affected by Trump’s tweets.
                        </button>
                      </h5>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                      <div className="card-body bg-secondary">
                        Yes, of course that will be useful. News affect different sectors differently, and visualizations will give you an idea of what kind of news impacts these sectors. You can go into specific companies, but generally speaking, Trump’s tweets affect entire sectors at a time, if not the entire economy, such as trade wars with China, which affects everything. 
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          What is your opinion on the project, and do you have any suggestions?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                      <div className="card-body bg-secondary">
                        It is a good idea, but add technical indicators as part of the screening process for finding stocks. Right now it’s all about fundamental news, tweets, etc, but you should also include technical indicators and tools such as MACD, RSI, fiboncacci retracements, elliot wave.etc.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="modal fade" id="proof" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
          <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
            {/* <!--Content--> */}
            <div className="modal-content">
              {/* <!--Header--> */}
              <div className="modal-header bg-primary">
                <p className="heading lead">Interview Proof</p>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="white-text">&times;</span>
                </button>
              </div>

              {/* <!--Body--> */}
              <div className="modal-body">
                <img alt="Proof of interview" className="img-fluid" src={InterviewProof}/>
              </div>

              {/* <!--Footer--> */}
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-info waves-effect" data-dismiss="modal">Close</button>
              </div>
            </div>
            {/* <!--/.Content--> */}
          </div>
        </div>

        {/* <!-- Call to Action Section --> */}
        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Deploy your own Money Watch!</h2>
            <button className="btn btn-light btn-xl" data-toggle="modal" data-target="#downloadModel">Download Now!</button>
          </div>
        </section>
        {/* <!-- Download Popup --> */}
        <div className="modal fade" id="downloadModel" tabIndex="-1" role="dialog" aria-labelledby="downloadModelTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Money Watch Platform</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Coming Soon!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Contact Section --> */}
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">Ready to make millions? Send us an email and we will get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="row">
              <div className="align-self-center mr-auto ml-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                {/* <!-- Make sure to change the email address in anchor text AND the link below! --> */}
                <button className="d-block" href="mailto:adarshmelethil@gmail.com">adarshmelethil@gmail.com</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
