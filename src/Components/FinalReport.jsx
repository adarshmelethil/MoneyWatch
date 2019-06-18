import React from 'react';

import MoneyWatchFinalReport from '../pdf/MoneyWatchFinalReport.pdf';

import "react-pdf/dist/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class FinalReport extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  onButtonClicked = ({ pageNumber }) => {
    this.setState({
      pageNumber: pageNumber
    })
  }

  render() {
    const { pageNumber } = this.state;

    return (
      <div>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <Document
                  file={MoneyWatchFinalReport}
                  onLoadError={(err) => console.log(err)}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                  onItemClick={this.onButtonClicked}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    );
  }
}

export default FinalReport;
